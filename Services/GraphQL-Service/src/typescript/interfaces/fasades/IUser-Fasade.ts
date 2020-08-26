import AdminUserDto from "../../../dto/models/user/Admin-User-Dto";

export default interface IUserFasade {
  addAdminUser(username: string): Promise<any>;
  addUser(username: string, password: string): Promise<any>;
  getAdminUser(username: string): Promise<AdminUserDto | null>;
}
