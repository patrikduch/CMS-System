'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('ownerinfo', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			companyName: {
				type: Sequelize.STRING
			},

			projectId: {
				type: Sequelize.INTEGER,
				references: { model: 'projectdetail', key: 'id' },
				allowNull: true,
				unique: true
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
		return queryInterface.dropTable('ownerinfo');
	}
};
