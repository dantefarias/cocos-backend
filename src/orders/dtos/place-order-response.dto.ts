import { ApiProperty } from "@nestjs/swagger";

export class PlaceOrderResponse {
    @ApiProperty({ description: 'Order ID', example: 1 })
    id: number;

    @ApiProperty({ description: 'Instrument ID', example: 1 })
    instrumentid?: number;

    @ApiProperty({ description: 'User ID', example: 1 })
    userid?: number;

    @ApiProperty({ description: 'Order status', example: 'FILLED' })
    status?: string;

    @ApiProperty({ description: 'Order type', example: 'MARKET' })
    type?: string;

    @ApiProperty({ description: 'Order side', example: 'BUY' })
    side?: string;

    @ApiProperty({ description: 'Order size', example: 100 })
    size?: number;

    @ApiProperty({ description: 'Order price', example: 100 })
    price?: number;

    @ApiProperty({ description: 'Order datetime', example: '2023-07-13 12:31:20' })
    datetime?: string;
}