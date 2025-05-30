import { Module } from "@nestjs/common";
import { InstrumentsService } from "./instruments.service";
import { InstrumentsController } from "./instruments.controller";
import { InfraModule } from "src/common/infra/infra.module";

@Module({
  imports: [InfraModule],
  controllers: [InstrumentsController],
  providers: [InstrumentsService],
})
export class InstrumentsModule {}