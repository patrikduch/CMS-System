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
			queryInterface.bulkInsert('article', [
				{
					title: 'Název článku2',
					content: 'Obsah článku2',
					articleCategoryId: 1,
					CreatedAt: new Date(),
					UpdatedAt: new Date()
				}
			]),

			queryInterface.bulkInsert('article', [
				{
					title: 'Název článku3',
					content: 'Obsah článku3',
					articleCategoryId: 1,
					CreatedAt: new Date(),
					UpdatedAt: new Date()
				}
			]),

			queryInterface.bulkInsert('article', [
				{
					title: 'Název článku4',
					content: 'Obsah článku4',
					articleCategoryId: 1,
					CreatedAt: new Date(),
					UpdatedAt: new Date()
				}
			]),

			queryInterface.bulkInsert('article', [
				{
					title: 'Název článku5',
					content: 'Obsah článku5',
					articleCategoryId: 1,
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
