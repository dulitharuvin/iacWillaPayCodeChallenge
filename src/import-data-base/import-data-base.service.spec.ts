import { Test, TestingModule } from '@nestjs/testing';
import { ImportDataBaseService } from './import-data-base.service';

describe('ImportDataBaseService', () => {
  let service: ImportDataBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportDataBaseService],
    }).compile();

    service = module.get<ImportDataBaseService>(ImportDataBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
