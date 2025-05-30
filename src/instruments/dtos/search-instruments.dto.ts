import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class SearchInstrumentsDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'Page', example: 1 })
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'Page size', example: 10 })
  pagesize?: number;

  @IsOptional()
  @ApiProperty({ description: 'Search', example: 'AAPL' })
  search?: string;
}