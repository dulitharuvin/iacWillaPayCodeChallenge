export class Column {
  public name: string;
  public foreign_key: string;

  constructor(o: any = {}) {
    this.name = o['name'] ?? '';
    this.foreign_key = o['foreign_key'] ?? null;
  }
}
