import IUserFasade from "../../typescript/interfaces/fasades/IUser-Fasade";
import { injectable, inject } from "inversify";
import IUnitOfWork from "../../typescript/interfaces/uow/IUnitOfWork";
import { TYPES } from "../../ioc/types";
import UserRoleModel from "../../models/user/UserRole";
import UserModel from "../../models/user/User";
import RoleModel from "../../models/user/Role";
import UserRole from "../../models/user/UserRole";
import AdminUserDto from "../../dto/models/user/Admin-User-Dto";
import bcrypt from "bcrypt-nodejs";
@injectable()
export default class UserFasade implements IUserFasade {
  private _uow!: IUnitOfWork;
  constructor(
    @inject(TYPES.IUnitOfWork)
    private uow: IUnitOfWork
  ) {
    // Save unit of work instance
    this._uow = uow;
  }
  async addAdminUser(username: string): Promise<any> {
    const userEntity = await this._uow
      .getRepository(UserModel)
      .findFirst({
        where: {
          username: username,
        },
      });

    const userRep = this._uow.getRepository(UserRoleModel);
    const currentModel = userRep.getCurrentModel();

    /* Create local instance */
    const res = currentModel.build({
      userId: userEntity.id,
      roleId: 1,
    });

    /* Add repository into tracking state. */
    this._uow.trackRepository(res);

    /* Save changes to the database */
    return this._uow.saveChanges();
  }

  async addUser(username: string, password: string): Promise<any> {
    const userRep = this._uow.getRepository(UserModel);
    const roleRep = this._uow.getRepository(UserRole);
    const userEntity = await this._uow
      .getRepository(UserModel)
      .findFirst({
        where: {
          username: username,
        },
      });
    /* Entity cannot be found */
    if (userEntity == null) {
      const currentModel = userRep.getCurrentModel();
      const generatedPass = bcrypt.hashSync(password);
      /* Create local instance */
      const res = currentModel.build({
        username: username,
        password: generatedPass,
      });

      /* Add repository into tracking state. */
      this._uow.trackRepository(res);

      /* Save changes to the database */
      return this._uow.saveChanges();
    }
    await UserModel.destroy({
      where: {
        id: userEntity.id,
      },
    });
  }
  /*
   * Get admin user from database
   */
  async getAdminUser(username: string): Promise<AdminUserDto | null> {
    const entity = this._uow.getRepository(UserRole);
    // 1. Check for user existence
    const userEntity = await entity.findFirst({
      include: [
        {
          model: UserModel,
          where: {
            username: username,
          },
        },
        {
          model: RoleModel,
          where: {
            name: "Admin",
          },
        },
      ],
    });
    if (userEntity == null) {
      return null;
    }
    const adminEntity = new AdminUserDto();
    adminEntity.setUserId(userEntity.userId);
    adminEntity.setRoleId(userEntity.roleId);
    adminEntity.setPassword(userEntity.Users[0].password);
    return adminEntity;
  }
}
