"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("module", [
      {
        name: "Cookie_Agreement",
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        sectionId: 3,
        priority: 4
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
