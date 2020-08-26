"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("gallerycategory", [
        {
          name: "Test category 1",
          description: "Testovací kategorie číslo jedna",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ]),

      queryInterface.bulkInsert("gallerycategory", [
        {
          name: "Test category 2",
          description: "Testovací kategorie číslo dvě",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ]),

      queryInterface.bulkInsert("gallerycategory", [
        {
          name: "Test category 3",
          description: "Testovací kategorie číslo tři",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ]),

      queryInterface.bulkInsert("gallerycategory", [
        {
          name: "Test category 4",
          description: "Testovací kategorie číslo čtyři",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ]),

      queryInterface.bulkInsert("gallerycategory", [
        {
          name: "Test category 5",
          description: "Testovací kategorie číslo pět",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ]),

      queryInterface.bulkInsert("gallerycategory", [
        {
          name: "Test category 6",
          description: "Testovací kategorie číslo šest",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ])
    ]);

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
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
