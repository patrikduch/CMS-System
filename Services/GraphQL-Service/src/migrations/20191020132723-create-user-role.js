'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('RoleUser', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},

			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'user', // name of Target model
					key: 'id' // key in Target model that we're referencing
				}
				//onUpdate: 'CASCADE',
				//onDelete: 'SET NULL',
			},

			roleId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'role', // name of Target model
					key: 'id' // key in Target model that we're referencing
				}
				//onUpdate: 'CASCADE',
				//onDelete: 'SET NULL',
			},

			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('RoleUser');
	}
};
