import { Test, TestingModule } from '@nestjs/testing';
import { ImportDataBaseController } from './import-data-base.controller';
import { ImportDataBaseService } from './import-data-base.service';

describe('ImportDataBaseController', () => {
  let controller: ImportDataBaseController;

  const importDataBaseService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportDataBaseController],
      providers: [
        {
          provide: ImportDataBaseService,
          useValue: importDataBaseService,
        },
      ],
    }).compile();

    controller = module.get<ImportDataBaseController>(ImportDataBaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have processDbSchemaJson method', () => {
    expect(controller.processDbSchemaJson).toBeDefined();
  });
});
