'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('module', [
			{
				name: 'NavigationBar',
				CreatedAt: new Date(),
				UpdatedAt: new Date(),
				sectionId: 1,
				priority: 1
			},

			{
				name: 'DayNotification',
				CreatedAt: new Date(),
				UpdatedAt: new Date(),
				sectionId: 2,
				priority: 1
			},

			{
				name: 'Newsletter',
				CreatedAt: new Date(),
				UpdatedAt: new Date(),
				sectionId: 3,
				priority: 1
			},

			{
				name: 'OwnerInfo',
				CreatedAt: new Date(),
				UpdatedAt: new Date(),
				sectionId: 2,
				priority: 2
			},

			{
				name: 'Copyright',
				CreatedAt: new Date(),
				UpdatedAt: new Date(),
				sectionId: 3,
				priority: 3
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
