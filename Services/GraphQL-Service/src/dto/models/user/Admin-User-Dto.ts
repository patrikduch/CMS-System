/* User identifier private field. */
const _userId = new WeakMap();

/* Password private field. */
const _password = new WeakMap();

/* Role identifier private field. */
const _roleId = new WeakMap();

/* Type checking. */
import IAdminUserDto from "../../../typescript/interfaces/dto/users/IAdmin-User-Dto";

/* 
  Dto to manage Administrators withing REST API app.
*/
class AdminUserDto implements IAdminUserDto {
  getUserId: () => number;
  setUserId: (userId: number) => void;
  getPassword: () => string;
  setPassword: (password: string) => void;
  getRoleId: () => number;
  setRoleId: (roleId: number) => void;

  constructor() {
    this.getUserId = () => {
      return _userId.get(this);
    };
    this.setUserId = (userId: number) => {
      _userId.set(this, userId);
    };
    this.getPassword = () => {
      return _password.get(this);
    };
    this.setPassword = (password: string) => {
      _password.set(this, password);
    };
    this.getRoleId = () => {
      return _roleId.get(this);
    };
    this.setRoleId = (roleId: number) => {
      _roleId.set(this, roleId);
    };
  }
}

export default AdminUserDto;
