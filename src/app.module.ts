import { Module } from '@nestjs/common';
import { PortfolioModule } from './portfolio/portfolio.module';
import { InstrumentsModule } from './instruments/instruments.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PortfolioModule, InstrumentsModule, OrdersModule],
})
export class AppModule {}
