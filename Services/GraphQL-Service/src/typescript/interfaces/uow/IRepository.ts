export default interface IRepository {
  findAll(): Promise<any>;
  findFirst(): Promise<any>;
  findLatest(limit: number): Promise<any>;
  getPaged(pageId: number, pageSize: number, whereObj: {}): Promise<any>;
  add(data: any): void;
  getCurrentModel(): any;
  count(): Promise<number>;
}
