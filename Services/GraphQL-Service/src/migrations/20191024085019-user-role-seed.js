'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('roleuser', [
			{
				userId: 1,
				roleId: 1,
				CreatedAt: new Date(),
				UpdatedAt: new Date()
			}
		]);

		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('roleuser');

		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
	}
};
