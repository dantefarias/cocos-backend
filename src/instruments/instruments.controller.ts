import { Controller, Get, Query, DefaultValuePipe, ParseIntPipe, HttpCode, HttpStatus, Req } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { InstrumentsResponse } from './dtos/instruments-response.dto';
import { ApiTags } from '@nestjs/swagger';
import { SearchInstrumentsDto } from './dtos/search-instruments.dto';

@ApiTags('Instruments')
@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}

    @Get('search')
    @HttpCode(HttpStatus.OK)
    @ApiQuery({
        name: 'pagesize',
        required: false
      })
      @ApiQuery({
        name: 'search',
        description: 'Partial search for code or name (case insensitive)',
        required: false
      })
    @ApiOkResponse({ type: InstrumentsResponse })
    async searchInstruments(
        @Query() query: SearchInstrumentsDto,
    ): Promise<InstrumentsResponse> {
      const page = query.page ?? 1;
      const pagesize = query.pagesize ?? 10;
      const search = query.search ?? '';
      
      const instruments = await this.instrumentsService.searchInstruments(search, page, pagesize);
      return {
        data: instruments.data.map((instrument) => ({
          id: instrument.id,
          name: instrument.name ?? '',
          ticker: instrument.ticker ?? '',
          type: instrument.type ?? '',
        })),
        meta: instruments.meta,
      };
    }
}