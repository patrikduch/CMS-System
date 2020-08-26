'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return queryInterface.bulkInsert('article', [
			{
				title: 'Název článku',
				content: 'Obsah článku',
				articleCategoryId: 1,
				CreatedAt: new Date(),
				UpdatedAt: new Date()
			}
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
