import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImportDataBaseModule } from './import-data-base/import-data-base.module';

@Module({
  imports: [ImportDataBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
