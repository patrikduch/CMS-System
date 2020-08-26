'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('ownerinfo', [
			{
				Id: 1,
				companyName: 'Název společnosti',
				projectId: 1,
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

		return queryInterface.bulkDelete('ownerinfo');
	}
};
