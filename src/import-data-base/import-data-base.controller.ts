import {
  BadRequestException,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImportDataBaseService } from './import-data-base.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, jsonFileFilter } from '../utils/file-uploading.utils';

@Controller('import-data-base')
export class ImportDataBaseController {
  constructor(private readonly importDataBaseService: ImportDataBaseService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('dbschema', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: jsonFileFilter,
    }),
  )
  async processDbSchemaJson(
    @Req() req,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    const response = this.importDataBaseService.processJsonFile(file);
    return response;
  }
}
