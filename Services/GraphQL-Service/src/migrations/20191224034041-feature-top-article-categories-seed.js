"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("module", [
        {
          name: "Katégorie článků",
          sectionId: 2,
          priority: 3,
          featureId: 1,
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
