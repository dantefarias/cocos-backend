import { OrdersService, OrderSide } from '../orders/orders.service';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';
import { OrderType } from '../orders/dtos/place-order.dto';

describe('OrdersService', () => {
  let service: OrdersService;
  let mockDbService: any;

  beforeEach(() => {
    mockDbService = {
      instruments: {
        findUnique: jest.fn(),
      },
      marketdata: {
        findFirst: jest.fn(),
      },
      orders: {
        create: jest.fn(),
        findMany: jest.fn(),
      },
    };

    service = new OrdersService(mockDbService);
  });

  it('should handle a CASH_IN order and create an order', async () => {
    const fakeOrder = {
      userId: 1,
      instrumentId: 123,
      side: OrderSide.CASH_IN,
      amountToInvest: 1000,
      type: OrderType.MARKET,
    };

    const fakeInstrument = {
      id: 123,
      marketdata: [],
    };

    mockDbService.instruments.findUnique.mockResolvedValue(fakeInstrument);
    mockDbService.orders.findMany.mockResolvedValue([]);
    mockDbService.orders.create.mockResolvedValue({
      id: 1,
      ...fakeOrder,
      size: 1,
      price: new Decimal(fakeOrder.amountToInvest),
      status: 'FILLED',
      datetime: new Date(),
    });

    const result = await service.placeOrder(fakeOrder);

    expect(mockDbService.instruments.findUnique).toHaveBeenCalledWith({
      where: { id: 123 },
      include: {
        marketdata: {
          orderBy: { date: 'desc' },
          take: 1,
        },
      },
    });

    expect(mockDbService.orders.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          userid: fakeOrder.userId,
          instrumentid: fakeOrder.instrumentId,
          side: OrderSide.CASH_IN,
          price: new Decimal(fakeOrder.amountToInvest),
          status: 'FILLED',
        }),
      })
    );

    expect(result.status).toBe('FILLED');
  });

  it('should throw if instrument not found', async () => {
    mockDbService.instruments.findUnique.mockResolvedValue(null);

    await expect(
      service.placeOrder({
        userId: 1,
        instrumentId: 999,
        side: OrderSide.CASH_IN,
        amountToInvest: 500,
        type: 'MARKET' as OrderType,
      })
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('should handle a CASH_OUT order and calculate size', async () => {
    const fakeOrder = {
      userId: 1,
      instrumentId: 123,
      side: OrderSide.CASH_OUT,
      amountToInvest: 1000,
      type: OrderType.MARKET,
    };
  
    const fakeInstrument = {
      id: 123,
      marketdata: [],
    };
  
    const previousOrders = [
      {
        side: OrderSide.CASH_IN,
        size: 5,
        price: new Decimal(200),
      },
    ];
  
    mockDbService.instruments.findUnique.mockResolvedValue(fakeInstrument);
    mockDbService.orders.findMany.mockResolvedValue(previousOrders);
    mockDbService.orders.create.mockResolvedValue({
      id: 1,
      ...fakeOrder,
      size: 5,
      price: new Decimal(1000),
      status: 'FILLED',
      datetime: new Date(),
    });
  
    const result = await service.placeOrder(fakeOrder);
  
    expect(result.status).toBe('FILLED');
    expect(mockDbService.orders.create).toHaveBeenCalled();
  });
});
