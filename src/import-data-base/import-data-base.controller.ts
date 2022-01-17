import { Controller, Get, Post } from '@nestjs/common';
import { ImportDataBaseService } from './import-data-base.service';

@Controller('import-data-base')
export class ImportDataBaseController {
  constructor(private readonly importDataBaseService: ImportDataBaseService) {}

  @Post()
  create() {
    return null;
  }

  @Get()
  findAll() {
    return this.importDataBaseService.findAll();
  }
}
