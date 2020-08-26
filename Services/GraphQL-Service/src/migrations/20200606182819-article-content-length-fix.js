"use strict";
/*
 If you give the datatype as TEXT in Sequelize It will automatically convert that field to NVARCHAR(MAX) for SQL Server database.
*/

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("article", "content", {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
