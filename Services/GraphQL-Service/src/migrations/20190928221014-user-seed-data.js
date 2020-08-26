'use strict';

const bcryptNodejs = require('bcrypt-nodejs');

var salt = bcryptNodejs.genSaltSync(20);

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return await queryInterface.bulkInsert('user', [
			{
				username: 'walek',
				password: bcryptNodejs.hashSync('bogdan', salt),
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
