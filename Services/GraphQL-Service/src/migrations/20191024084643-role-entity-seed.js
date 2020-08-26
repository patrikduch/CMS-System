'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return queryInterface.bulkInsert('role', [
			{
				name: 'Admin',
				CreatedAt: new Date(),
				UpdatedAt: new Date()
			}
		]);
	},

	down: (queryInterface, Sequelize) => {
		queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
		queryInterface.bulkDelete('role', null, { truncate: true });
		return queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
	}
};
