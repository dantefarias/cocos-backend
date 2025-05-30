import { ApiProperty } from "@nestjs/swagger";

export class PortfolioHolding {
    @ApiProperty({ description: 'Ticker', example: 'AAPL' })
    ticker: string;
    @ApiProperty({ description: 'Name', example: 'Apple Inc.' })
    name: string;
    @ApiProperty({ description: 'Quantity', example: 100 })
    quantity: number;
    @ApiProperty({ description: 'Invested', example: 1000.00 })
    invested: number;
    @ApiProperty({ description: 'Market value', example: 1000.00 })
    marketValue: number;
    @ApiProperty({ description: 'Performance', example: '10.00%' })
    performance: string;
  }
export class PortfolioResponse {
    @ApiProperty({ description: 'User ID', example: 1 })
    userId: number;
    @ApiProperty({ description: 'Cash available', example: 1000.00 })
    cashAvailable: number;
    @ApiProperty({ description: 'Portfolio holdings', type: [PortfolioHolding] })
    holdings: PortfolioHolding[];
}