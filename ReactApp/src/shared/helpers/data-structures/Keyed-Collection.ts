/* 
  Interface for Dictionary data structure.
*/
export interface IKeyedCollection<T> {
  Add(key: string, value: T): void;
  ContainsKey(key: string): boolean;
  Count(): number;
  Item(key: string): T;
  Keys(): string[];
  Remove(key: string): T;
  Values(): T[];
}

/* 
  Dictionary data structure representation.
*/
export default class KeyedCollection<T> implements IKeyedCollection<T> {
  private items: { [index: string]: T } = {};

  private count: number = 0;

  /* Check if key exists in collection. */
  public ContainsKey(key: string): boolean {
    return this.items.hasOwnProperty(key);
  }

  /*
    Get number of dictionary collection.
  */
  public Count(): number {
    return this.count;
  }

  /*
    Add new element into Dictionary collection.
  */
  public Add(key: string, value: T) {
    if (!this.items.hasOwnProperty(key)) this.count++;

    this.items[key] = value;
  }

  /* 
    Remove element from dictionary collection.
  */
  public Remove(key: string): T {
    const val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }

  public Item(key: string): T {
    return this.items[key];
  }

  /*
    Get all keys collection.
  */
  public Keys(): string[] {
    const keySet: string[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(prop);
      }
    }

    return keySet;
  }

  /*
    Get all values collection.
  */
  public Values(): T[] {
    const values: T[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }

    return values;
  }
}
