import IKoaContext from "../../typescript/interfaces/libraries/IKoa-Context";
import AdminUserDto from "../../dto/models/user/Admin-User-Dto";

// Required enums
import RoleType from "../../typescript/enums/services/user/RoleType";
import StatusCodeType from "../../typescript/enums/shared/http/Status-Code-Type";

/* 
  Checker for data field for processing user authentication and authorization.
*/
class UserDataValidatorService {
  /*
    Check if data are filled correctly. Black fields are not permitted.
  */
  static isDataFilled(
    username: string,
    password: string,
    ctx: IKoaContext
  ): void {
    if (username == undefined || password == undefined) {
      return ctx.throw(
        StatusCodeType.PreconditionFailed,
        "Username or password wasn´t filled."
      );
    }
  }

  // User check (provided user is in database?)

  /* 
    Check if user is Admin.
  */
  static isUserAdmin(adminUser: AdminUserDto | null): boolean {
    if (adminUser !== null && adminUser.getRoleId() == RoleType.Admin) {
      return true;
    }

    return false;
  }
}

export default UserDataValidatorService;
