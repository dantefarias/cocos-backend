import { Controller, Get, HttpCode, HttpStatus, Param, Res } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PortfolioResponse } from './dtos/porfolio-response.dto';

@ApiTags('User Portfolio')
@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}

    @Get(':userId')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PortfolioResponse })
    async getPortfolio(
        @Param('userId') userId: string): Promise<PortfolioResponse> {
        const portfolio = await this.portfolioService.getPortfolio(Number(userId));

        return {
            userId: portfolio.userId,
            cashAvailable: portfolio.cashAvailable,
            holdings: portfolio.portfolio,
        };
    }
}
