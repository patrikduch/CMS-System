export default interface IUserQueryExecutor {
  getUser(): Promise<any>;
}
