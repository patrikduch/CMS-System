import IUserQuery from "../../typescript/interfaces/query-objects/IUser-Query";

export default class UserQuery implements IUserQuery {
  private _username!: string;

  setUserName(username: string) {
    this._username = username;
  }

  getUserName(): string {
    return this._username;
  }
}
