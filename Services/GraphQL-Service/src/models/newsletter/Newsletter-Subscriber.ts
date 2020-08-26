import Database from "../../util/database";
import { Model, DataTypes } from "sequelize";

/**
 * @class NewsletterSubscriber => Data model that represents all users that are subscibed to news channel.
 */
class NewsletterSubscriber extends Model {
  public id!: number;
  public email!: string;
}

NewsletterSubscriber.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: Database,
    tableName: "newslettersubscriber",
  }
);

export default NewsletterSubscriber;
