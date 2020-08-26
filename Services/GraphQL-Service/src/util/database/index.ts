import connection from './connection.json';
import { Sequelize } from 'sequelize-typescript';

export default connection.isDev == 0
	? new Sequelize(
			connection.prod.databaseName,
			connection.prod.username,
			connection.prod.password,
			{
				dialect: 'mysql',
				dialectModule: require('mysql2'),
				host: connection.prod.host
			}
	  )
	: new Sequelize('bachelorproject', 'admin', '007kokot', {
			dialect: 'mysql',
			dialectModule: require('mysql2'),
			host: '193.105.159.179'
	  });
