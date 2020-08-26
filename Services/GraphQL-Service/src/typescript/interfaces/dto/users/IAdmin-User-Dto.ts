/**
 * @interface IAdminUserDto => Contact for AdminUser data transfer object.
 */
interface IAdminUserDto {
  getUserId(): number;
  setUserId(userId: number): void;
  getRoleId(): number;
  getPassword(): string;
}

export default IAdminUserDto;
