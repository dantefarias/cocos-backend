import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { InfraModule } from 'src/common/infra/infra.module';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService],
  imports: [InfraModule],
})
export class PortfolioModule {}
