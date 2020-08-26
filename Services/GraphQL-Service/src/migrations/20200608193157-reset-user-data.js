"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return Promise.all([
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0"),
      queryInterface.bulkDelete("user", null, { truncate: true }),
      queryInterface.bulkDelete("roleuser", null, { truncate: true }),
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return Promise.all([
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"),
    ]);
  },
};
