import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

class SocialIcon extends Model {
  public id!: number;
  public name!: string;
  public code!: string;
  public url!: string;
}

SocialIcon.init(
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

    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: Database,
    tableName: "socialicon"
  }
);

export default SocialIcon;
