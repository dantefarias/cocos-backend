import { ApiProperty } from "@nestjs/swagger";

export class Meta {
    @ApiProperty({ description: 'Page', example: 1 })
    page: number;

    @ApiProperty({ description: 'Page size', example: 10 })
    pageSize: number;

    @ApiProperty({ description: 'Total items', example: 100 })
    totalItems: number;

    @ApiProperty({ description: 'Total pages', example: 10 })
    totalPages: number;

    @ApiProperty({ description: 'Has next page', example: true })
    hasNextPage: boolean;

    @ApiProperty({ description: 'Has previous page', example: true })
    hasPrevPage: boolean;
}

export class Instrument {
    @ApiProperty({ description: 'Instrument ID', example: 1 })
    id: number;

    @ApiProperty({ description: 'Instrument name', example: 'Apple Inc.' })
    name: string;

    @ApiProperty({ description: 'Instrument ticker', example: 'AAPL' })
    ticker: string;

    @ApiProperty({ description: 'Instrument type', example: 'stock' })
    type: string;

}

export class InstrumentsResponse {
    @ApiProperty({ description: 'Instruments', type: [Instrument] })
    data: Instrument[];

    @ApiProperty({ description: 'Meta', type: Meta })
    meta: Meta;
}

