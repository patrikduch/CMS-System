import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

import ModuleModel from "./Module";

class Section extends Model {
  public id!: number;
  public name!: string;
}

Section.init(
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
    tableName: "Section"
  }
);

// Here we associate which actually populates out pre-declared `association` static and other methods.
Section.hasMany(ModuleModel, {
  sourceKey: "id",
  foreignKey: "sectionId"
  //as: 'projects' // this determines the name in `associations`!
});

export default Section;
