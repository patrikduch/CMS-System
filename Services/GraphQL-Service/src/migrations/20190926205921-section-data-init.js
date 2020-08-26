'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('section', [
			{
				name: 'Header',
				CreatedAt: new Date(),
				UpdatedAt: new Date()
			},

			{
				name: 'Body',
				CreatedAt: new Date(),
				UpdatedAt: new Date()
			},

			{
				name: 'Footer',
				CreatedAt: new Date(),
				UpdatedAt: new Date()
			}
		]);
	},

	down: (queryInterface, Sequelize) => {}
};
