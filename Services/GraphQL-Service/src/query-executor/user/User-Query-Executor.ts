import IUserQueryExecutor from "../../typescript/interfaces/query-executors/user/IUser-Query-Executor";
import IUserQuery from "../../typescript/interfaces/query-objects/IUser-Query";
import UserModel from "../../models/user/User";

export default class UserQueryExecutor implements IUserQueryExecutor {
  private _userQuery: IUserQuery;

  constructor(userQuery: IUserQuery) {
    this._userQuery = userQuery;
  }

  async getUser(): Promise<any> {
    // Username was provided
    if (this._userQuery.getUserName() != undefined) {
      const username = this._userQuery.getUserName();

      return await UserModel.findOne({
        where: {
          username: username
        }
      });
    }
  }
}
