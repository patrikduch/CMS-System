import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

class GalleryItem extends Model {
  public id!: number;
  public name!: string;
  public code!: string;
  public projectId!: number;
  public isDefault!: boolean;
}

GalleryItem.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: Database,
    tableName: "galleryitem",
  }
);

export default GalleryItem;
