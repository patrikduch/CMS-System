import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

class Role extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: Database,
    tableName: "role"
  }
);

export default Role;
