import { Test, TestingModule } from '@nestjs/testing';
import { ImportDataBaseController } from './import-data-base.controller';
import { ImportDataBaseService } from './import-data-base.service';

describe('ImportDataBaseController', () => {
  let controller: ImportDataBaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportDataBaseController],
      providers: [ImportDataBaseService],
    }).compile();

    controller = module.get<ImportDataBaseController>(ImportDataBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
