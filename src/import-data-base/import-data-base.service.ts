import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Table } from './dto/Table';
import { Column } from './dto/Column';

@Injectable()
export class ImportDataBaseService {
  processJsonFile(file: Express.Multer.File): Table[] {
    try {
      const dbSchemaData = readFileSync(file.path, 'utf8');
      const jsonData = JSON.parse(dbSchemaData);
      const tables: Table[] = jsonData.map((table: any) => {
        return new Table(table);
      });
      return this.sortJsonTableArray(tables);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  private sortJsonTableArray(tables: Table[]): Table[] {
    const orderedTables: Table[] = [];
    const tableQueToAddToOrdered: Table[] = [];
    tables.forEach((tbl) => {
      const foreignKeyTables = this.getForeignKeyReferencedTables(tbl.columns);
      if (foreignKeyTables.length === 0) {
        orderedTables.push(tbl);
      } else if (
        this.canInsertToOrderedTableList(foreignKeyTables, orderedTables)
      ) {
        orderedTables.push(tbl);
      } else {
        tableQueToAddToOrdered.push(tbl);
      }
    });
    return [...orderedTables, ...tableQueToAddToOrdered];
  }

  private getForeignKeyReferencedTables(columns: Column[]): string[] {
    const foreignKeyTables = columns.reduce(function (
      cols: string[],
      col: Column,
    ) {
      if (col.foreign_key) {
        const tableName = col.foreign_key.split('.')[0];
        cols.push(tableName);
      }
      return cols;
    },
    []);
    return foreignKeyTables;
  }

  private canInsertToOrderedTableList(
    tableNamesToCheck: string[],
    orderedTables: Table[],
  ): boolean {
    return tableNamesToCheck.every((tblName) =>
      orderedTables.some((tbl) => tbl.name === tblName),
    );
  }
}
