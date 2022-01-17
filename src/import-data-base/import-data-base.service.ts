import { Injectable } from '@nestjs/common';

@Injectable()
export class ImportDataBaseService {
  findAll() {
    return `This action returns all importDataBase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} importDataBase`;
  }

  remove(id: number) {
    return `This action removes a #${id} importDataBase`;
  }
}
