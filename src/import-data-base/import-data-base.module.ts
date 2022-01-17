import { Module } from '@nestjs/common';
import { ImportDataBaseService } from './import-data-base.service';
import { ImportDataBaseController } from './import-data-base.controller';

@Module({
  controllers: [ImportDataBaseController],
  providers: [ImportDataBaseService],
})
export class ImportDataBaseModule {}
