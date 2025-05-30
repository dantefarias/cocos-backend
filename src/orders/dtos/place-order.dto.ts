import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, ValidateIf } from 'class-validator';

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
  CASH_IN = 'CASH_IN',
  CASH_OUT = 'CASH_OUT',
}

export enum OrderType {
  MARKET = 'MARKET',
  LIMIT = 'LIMIT',
}

export class PlaceOrderData {
  @ApiProperty({ description: 'User ID', example: 1 })
  @IsNumber()
  userId: number;

  @ApiProperty({ description: 'Instrument ID', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  instrumentId: number;

  @ApiProperty({ description: 'Order side', example: OrderSide.BUY })
  @IsEnum(OrderSide)
  side: OrderSide;

  @ApiProperty({ description: 'Size', example: 100 })
  @IsNumber()
  @IsPositive()
  @ValidateIf((o) => !o.amountToInvest && o.amountToInvest !== 0)
  size?: number;

  @ApiProperty({ description: 'Amount to invest', example: 100 })
  @IsNumber()
  @IsPositive()
  @ValidateIf((o) => !o.size && o.size !== 0)
  amountToInvest?: number;

  @ApiProperty({ description: 'Order type', example: OrderType.MARKET })
  @IsEnum(OrderType)
  type: OrderType;

  @ApiProperty({ description: 'Price', example: 100 })
  @IsNumber()
  @ValidateIf((param) => param.type === OrderType.LIMIT)
  price?: number;

}
