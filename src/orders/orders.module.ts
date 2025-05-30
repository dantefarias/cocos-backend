import { Module } from "@nestjs/common";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { InfraModule } from "src/common/infra/infra.module";

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [InfraModule],
})
export class OrdersModule {}