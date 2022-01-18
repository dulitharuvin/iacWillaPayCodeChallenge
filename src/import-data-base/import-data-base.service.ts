import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Table } from './dto/Table';

@Injectable()
export class ImportDataBaseService {
  processJsonFile(file: Express.Multer.File): Table[] {
    try {
      const dbSchemaData = readFileSync(file.path, 'utf8');
      const jsonData = JSON.parse(dbSchemaData);
      const tables: Table[] = jsonData.map((table: any) => {
        return new Table(table);
      });
      this.sortJsonTableArray(tables);
      return tables;
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  sortJsonTableArray(tables: Table[]) {
    console.log(tables);
  }
}
