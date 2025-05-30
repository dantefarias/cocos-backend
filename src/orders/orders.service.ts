import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { DbService } from '../common/infra/db/db.service';
import { OrderType, PlaceOrderData } from './dtos/place-order.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { Instrument } from 'src/instruments/dtos/instruments-response.dto';
import { orders, Prisma } from '@prisma/client';

export enum OrderStatus {
  FILLED = 'FILLED',
  REJECTED = 'REJECTED',
  NEW = 'NEW',
}

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
  CASH_IN = 'CASH_IN',
  CASH_OUT = 'CASH_OUT',
}

interface OrderWithInstrument extends PlaceOrderData {
  instrument: InstrumentLastPrice;
}

  const instrumentWithMarketData = Prisma.validator<Prisma.instrumentsInclude>()({
    marketdata: true,
  });
  
  type InstrumentLastPrice = Prisma.instrumentsGetPayload<{
    include: typeof instrumentWithMarketData;
  }>;


@Injectable()
export class OrdersService {
  constructor(private readonly db: DbService) {}

  async placeOrder(order: PlaceOrderData): Promise<orders> {
    try {
    const { side } = order;
    const instrument = await this.getInstrumentLastPrice(order.instrumentId);

    if (!instrument) {
      throw new BadRequestException('Instrument not found');
    }

    if (side === OrderSide.CASH_IN || side === OrderSide.CASH_OUT) {
      return this.handleCashOrder({...order, instrument});
    }

    return this.handleTradeOrder({...order, instrument});
    
  } catch (error) {
    throw new InternalServerErrorException('Failed to place order', error.message);
  }
  }

  private async handleCashOrder(order: OrderWithInstrument) {
    const { userId, side, amountToInvest, instrumentId} = order;

    if (!amountToInvest) {
      throw new BadRequestException('Amount must be greater than 0 to deposit');
    }

    const userBalance = await this.getUserBalance(userId);
    const total = amountToInvest;
    let status: 'FILLED' | 'REJECTED' = 'FILLED';

    if (side === 'CASH_OUT' && total > userBalance) {
      status = 'REJECTED';
    }

    return this.db.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        size: 1,
        side,
        price: new Decimal(amountToInvest),
        type: OrderType.MARKET,
        status,
        datetime: new Date(),
      },
    });
  }

  private async handleTradeOrder(order: OrderWithInstrument) {
    const { userId, instrumentId, side, type, size, amountToInvest, price: limitPrice, instrument} = order;

    if (instrument.marketdata.length === 0) throw new BadRequestException('No market data available');
    
    let finalPrice: number;
    let finalSize: number;
    let status: 'FILLED' | 'NEW' | 'REJECTED' = 'NEW';
    let rejectionreason: string | undefined;

    if (type === 'MARKET') {
      const marketData = await this.db.marketdata.findFirst({
        where: { instrumentid: instrumentId },
        orderBy: { date: 'desc' },
      });
      if (!marketData?.close) throw new BadRequestException('No market data available');
      finalPrice = Number(marketData.close);
      finalSize = size ?? Math.floor((amountToInvest ?? 0) / finalPrice);
    } else if (type === 'LIMIT') {
      if (!limitPrice || !size) throw new BadRequestException('LIMIT order requires price and size');
      finalPrice = limitPrice;
      finalSize = size;
    } else {
      throw new BadRequestException('Invalid order type');
    }

    const [balance, holdings] = await Promise.all([
      this.getUserBalance(userId),
      this.getUserHoldings(userId),
    ]);

    const total = finalSize * finalPrice;

    if (side === 'BUY' && total > balance) {
      status = 'REJECTED';
    }

    if (side === 'SELL') {
      const owned = holdings[instrumentId] ?? 0;
      if (finalSize > owned) {
        status = 'REJECTED';
      }
    }

    if (!rejectionreason && type === 'MARKET') {
      status = 'FILLED';
    }

    return await this.db.orders.create({
      data: {
        userid: userId,
        instrumentid: instrumentId,
        side,
        size: finalSize,
        price: new Decimal(finalPrice),
        type,
        status,
        datetime: new Date(),
      },
    });
  }

  async getUserBalance(userId: number): Promise<number> {
    const orders = await this.db.orders.findMany({
      where: { userid: userId, status: 'FILLED' },
    });

    return orders.reduce((balance, order) => {
      const price = Number(order.price);
      const size = order.size ?? 0;
      switch (order.side) {
        case 'CASH_IN': return balance + price;
        case 'CASH_OUT': return balance - price;
        case 'BUY': return balance - (size * price);
        case 'SELL': return balance + (size * price);
        default: return balance;
      }
    }, 0);
  }

  async getUserHoldings(userId: number): Promise<Record<number, number>> {
    const orders = await this.db.orders.findMany({
      where: { userid: userId, status: 'FILLED' },
    });

    const holdings: Record<number, number> = {};
    for (const order of orders) {
      if (!order.instrumentid) continue;
      const size = order.size ?? 0;
      const sign = order.side === 'BUY' ? 1 : order.side === 'SELL' ? -1 : 0;
      holdings[order.instrumentid] = (holdings[order.instrumentid] ?? 0) + (sign * size);
    }
    return holdings;
  }

  private async getInstrumentLastPrice(instrumentId: number): Promise<InstrumentLastPrice | null> {

      const instrument = await this.db.instruments.findUnique({
        where: { id: instrumentId },
        include: {
          marketdata: {
            orderBy: { date: 'desc' },
            take: 1,
          },
        },
      });
    return instrument;
  }
}
