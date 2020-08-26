import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

class Module extends Model {
  public id!: number;
  public name!: string;
  public code!: string;
  public sectionId!: number;
  public priority!: number;
  public isChanged!: boolean;
  public isEnabled!: boolean;
}

Module.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false
    },

    isChanged: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    isEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    sectionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  },
  {
    sequelize: Database,
    tableName: "Module"
  }
);

export default Module;
