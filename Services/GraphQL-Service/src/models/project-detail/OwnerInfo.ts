import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

class OwnerInfo extends Model {
  public id!: number;
  public projectId!: number;
  public companyName!: string;
  public dic!: string;
  public ico!: string;
  public street!: string;
  public city!: string;
  public zipCode!: string;
  public email!: string;
}

OwnerInfo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true
    },

    companyName: {
      type: DataTypes.STRING // you can omit the `new` but this is discouraged
    },

    dic: {
      type: DataTypes.STRING // you can omit the `new` but this is discouraged
    },

    ico: {
      type: DataTypes.STRING // you can omit the `new` but this is discouraged
    },

    street: {
      type: DataTypes.STRING // you can omit the `new` but this is discouraged
    },

    city: {
      type: DataTypes.STRING // you can omit the `new` but this is discouraged
    },

    zipCode: {
      type: DataTypes.STRING // you can omit the `new` but this is discouraged
    },

    email: {
      type: DataTypes.STRING // you can omit the `new` but this is discouraged
    },

    projectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  },
  {
    sequelize: Database,
    tableName: "ownerinfo"
  }
);

export default OwnerInfo;
