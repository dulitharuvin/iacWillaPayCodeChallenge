import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Table } from './dto/Table';
import { Column } from './dto/Column';
import {
  CHARACHTER_ENCODING,
  FOREIGHN_KEY_TABLE_SEPERATOR,
} from '../utils/constants/constants';

@Injectable()
export class ImportDataBaseService {
  private orderedTableList: Table[] = [];
  private inputTableList: Table[] = [];

  processJsonFile(file: Express.Multer.File): string[] {
    this.clearTableArrays();
    try {
      const dbSchemaData = readFileSync(file.path, CHARACHTER_ENCODING);
      const jsonData = JSON.parse(dbSchemaData);
      this.inputTableList = jsonData.map((table: any) => {
        return new Table(table);
      });
      this.initializeTableListSorting();
      return this.orderedTableList.map((table) => table.name);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  initializeTableListSorting() {
    this.inputTableList.forEach((tbl) => {
      this.sortInputTableList(tbl.name);
    });
  }

  private sortInputTableList(tableName: string) {
    const table: Table = this.inputTableList.find((tbl) => {
      return tbl.name === tableName;
    });

    const foreignKeyTables = this.getForeignKeyReferencedTables(table.columns);
    if (foreignKeyTables.length === 0) {
      this.insertToGlobalOrderedTableList(table);
    } else {
      const originalTableName: string = table.name;
      foreignKeyTables.forEach((foriegnTable) => {
        this.sortInputTableList(foriegnTable);
      });
      const originalTable = this.inputTableList.find(
        (tbl) => tbl.name === originalTableName,
      );
      this.insertToGlobalOrderedTableList(originalTable);
    }
  }

  getForeignKeyReferencedTables(columns: Column[]): string[] {
    const foreignKeyTables = columns.reduce(function (
      cols: string[],
      col: Column,
    ) {
      if (col.foreign_key) {
        const tableName = col.foreign_key.split(
          FOREIGHN_KEY_TABLE_SEPERATOR,
        )[0];
        cols.push(tableName);
      }
      return cols;
    },
    []);
    return foreignKeyTables;
  }

  insertToGlobalOrderedTableList(table: Table) {
    if (
      this.orderedTableList.findIndex(
        (ordTble) => ordTble.name === table.name,
      ) === -1
    ) {
      this.orderedTableList.push(table);
    }
  }

  clearTableArrays() {
    this.orderedTableList = [];
    this.inputTableList = [];
  }
}
