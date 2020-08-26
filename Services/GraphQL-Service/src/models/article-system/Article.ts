import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

class Article extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: Database,
    tableName: "article",
  }
);

export default Article;
