import { Module } from '@nestjs/common';
import { DbService } from './db/db.service';

@Module({
  providers: [DbService],
  exports: [DbService],
})
export class InfraModule { }