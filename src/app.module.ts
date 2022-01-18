import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImportDataBaseModule } from './import-data-base/import-data-base.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    ImportDataBaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
