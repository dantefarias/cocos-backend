import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DbService } from '../common/infra/db/db.service';
import { Decimal } from '@prisma/client/runtime/library';
import { orders, instruments, marketdata, Prisma } from '@prisma/client';


const orderWithInstrument = Prisma.validator<Prisma.ordersInclude>()({
  instruments: true,
});

type OrderWithInstrument = Prisma.ordersGetPayload<{
  include: typeof orderWithInstrument;
}>;

export interface PortfolioHolding {
  ticker: string;
  name: string;
  quantity: number;
  invested: number;
  marketValue: number;
  performance: string;
}

export interface PortfolioResponse {
  userId: number;
  cashAvailable: number;
  portfolio: PortfolioHolding[];
}

@Injectable()
export class PortfolioService {
  constructor(private readonly db: DbService) {}

  async getPortfolio(userId: number): Promise<PortfolioResponse> {
    try {
      const orders = await this.getFilledOrders(userId);

      const { cash, holdings } = this.processOrders(orders);
      

      const marketPrices = await this.getLatestMarketData(Array.from(holdings.keys()));
      const portfolio = this.buildPortfolioResponse(holdings, marketPrices);

      return {
        userId,
        cashAvailable: cash.toNumber(),
        portfolio,
      };
    } catch (error) {
      console.error('Failed to get portfolio:', error);
      throw new InternalServerErrorException('Unable to fetch portfolio data');
    }
  }

  private async getFilledOrders(userId: number): Promise<OrderWithInstrument[]> {
    return this.db.orders.findMany({
      where: { userid: userId, status: 'FILLED' },
      include: { instruments: true },
    });
  }

  private processOrders(orders: OrderWithInstrument[]) {
    const holdings = new Map<
      number,
      { ticker: string; name: string; size: number; invested: Decimal }
    >();
    let cash = new Decimal(0);

    for (const order of orders) {
      const { side, size, price, instrumentid, instruments } = order;
      const orderSize = size || 0;
      const orderPrice = price || new Decimal(0);

      switch (side) {
        case 'CASH_IN':
          cash = cash.add(orderPrice.mul(orderSize));
          break;

        case 'CASH_OUT':
          cash = cash.sub(orderPrice.mul(orderSize));
          break;

        case 'BUY':
          cash = cash.sub(orderPrice.mul(orderSize));
          if (!instrumentid || !instruments) break;
          this.updateHoldings(holdings, instrumentid, instruments, orderSize, orderPrice.mul(orderSize));
          break;

        case 'SELL':
          cash = cash.add(orderPrice.mul(orderSize));
          if (!instrumentid || !instruments) break;
          this.updateHoldings(holdings, instrumentid, instruments, -orderSize, orderPrice.mul(orderSize).neg());
          break;
      }
    }

    return { cash, holdings };
  }

  private updateHoldings(
    holdings: Map<number, { ticker: string; name: string; size: number; invested: Decimal }>,
    instrumentId: number,
    instrument: instruments,
    sizeDelta: number,
    investedDelta: Decimal
  ) {
    const existing = holdings.get(instrumentId) || {
      ticker: instrument.ticker || '',
      name: instrument.name || '',
      size: 0,
      invested: new Decimal(0),
    };

    existing.size += sizeDelta;
    existing.invested = existing.invested.add(investedDelta);

    if (existing.size <= 0) {
      holdings.delete(instrumentId);
    } else {
      holdings.set(instrumentId, existing);
    }
  }

  private async getLatestMarketData(instrumentIds: number[]) {
    const allMarketData = await this.db.marketdata.findMany({
      where: { instrumentid: { in: instrumentIds } },
      orderBy: { date: 'desc' },
    });

    const latestMap = new Map<number, marketdata>();
    for (const data of allMarketData) {
      if (!data.instrumentid) continue;
      if (!latestMap.has(data.instrumentid)) {
        latestMap.set(data.instrumentid, data);
      }
    }
    return latestMap;
  }

  private buildPortfolioResponse(
    holdings: Map<number, { ticker: string; name: string; size: number; invested: Decimal }>,
    marketPrices: Map<number, marketdata>
  ) {
      const result: PortfolioHolding[] = [];

    for (const [id, holding] of holdings.entries()) {
      const market = marketPrices.get(id);
      const latestPrice = market?.close || new Decimal(0);
      const marketValue = latestPrice.mul(holding.size);
      const performance = holding.invested.gt(0)
        ? marketValue.minus(holding.invested).div(holding.invested).mul(100)
        : new Decimal(0);

      result.push({
        ticker: holding.ticker,
        name: holding.name,
        quantity: holding.size,
        invested: holding.invested.toNumber(),
        marketValue: marketValue.toNumber(),
        performance: performance.toFixed(2) + '%',
      });
    }

    return result;
  }
}

