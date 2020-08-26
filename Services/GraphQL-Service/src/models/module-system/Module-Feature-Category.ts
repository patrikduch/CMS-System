import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

/* 
  Represents category shared for modules and features.
*/
class ModuleFeatureCategory extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
}

ModuleFeatureCategory.init(
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

    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: Database,
    tableName: "modulefeaturecategory"
  }
);

export default ModuleFeatureCategory;
