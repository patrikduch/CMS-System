import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

import Role from "../user/Role";
import User from "./User";

class UserRole extends Model {
  public id!: number;
  public roleId!: number;
  public userId!: number;
}

UserRole.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true
    },

    userId: {
      type: DataTypes.INTEGER
      //onUpdate: 'CASCADE',
      //onDelete: 'SET NULL',
    },

    roleId: {
      type: DataTypes.INTEGER
    }
  },

  {
    sequelize: Database,
    tableName: "roleuser"
  }
);

// Here we associate which actually populates out pre-declared `association` static and other methods.
UserRole.hasMany(User, {
  sourceKey: "userId",
  foreignKey: "id"
});

UserRole.hasMany(Role, {
  sourceKey: "roleId",
  foreignKey: "id"
});

export default UserRole;
