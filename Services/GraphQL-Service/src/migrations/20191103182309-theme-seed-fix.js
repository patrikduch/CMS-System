'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return Promise.all([
			// Delete all current rows
			queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0'),
			queryInterface.bulkDelete('theme', null, { truncate: true }),
			queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'),

			// Seed database
			queryInterface.bulkInsert('theme', [
				{
					name: 'Defaultní šablona',
					code: 'default-theme',
					projectId: 1,
					isDefault: true,
					CreatedAt: new Date(),
					UpdatedAt: new Date()
				},

				{
					name: 'Šablona Ostravské univerzity',
					code: 'ou-theme',
					projectId: 1,
					isDefault: false,
					CreatedAt: new Date(),
					UpdatedAt: new Date()
				}
			])
		]);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
	}
};
