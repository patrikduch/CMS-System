import Database from '../../util/database';
import { Model, DataTypes } from 'sequelize';

class Theme extends Model {
	public id!: number;
	public name!: string;
	public code!: string;
	public projectId!: number;
	public isDefault!: boolean;
}

Theme.init(
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

		isDefault: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},

		projectId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: true
		}
	},
	{
		sequelize: Database,
		tableName: 'theme'
	}
);

export default Theme;
