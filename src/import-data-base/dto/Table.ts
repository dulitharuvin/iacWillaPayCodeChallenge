import { Column } from './Column';

export class Table {
  public name: string;
  public columns: Column[];

  constructor(o: any = {}) {
    this.name = o['name'] ?? '';
    const columns = o['columns'] ?? null;

    this.columns = [];
    if (columns) {
      this.columns = columns.map((col) => {
        return new Column(col);
      });
    }
  }
}
