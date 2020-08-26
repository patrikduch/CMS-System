import Database from '../../util/database';
import { Model, DataTypes } from 'sequelize';

class User extends Model {
	public id!: number;
	public username!: string;
	public password!: string;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
			autoIncrement: true,
			primaryKey: true
		},

		username: {
			type: DataTypes.STRING,
			allowNull: false
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize: Database,
		tableName: 'user'
	}
);

export default User;
