import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";
import ModuleFeatureCategory from "./Module-Feature-Category";
import Section from "./Section";

/* 
  Represents all modules and features that can be toggled of and on.
*/
class ModuleFeature extends Model {
  public id!: number;
  public name!: string;
  public code!: string;
  public description!: string;
  public sectionId!: number;
  public priority!: number;
  public isChanged!: boolean;
  public isEnabled!: boolean;
  public isFeature!: boolean;
}

ModuleFeature.init(
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

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    priority: {
      type: DataTypes.INTEGER
    },

    isChanged: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    isEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    isFeature: {
      /* Check if is feature otherwise is module */
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    sectionId: {
      type: DataTypes.INTEGER
      //onUpdate: 'CASCADE',
    },

    moduleFeatureCategoryId: {
      type: DataTypes.INTEGER
      //onUpdate: 'CASCADE',
    }
  },
  {
    sequelize: Database,
    tableName: "modulefeature"
  }
);

ModuleFeature.belongsTo(ModuleFeatureCategory, {
  foreignKey: "moduleFeatureCategoryId"
});

export default ModuleFeature;
