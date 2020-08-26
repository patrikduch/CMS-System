"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        { tableName: "ownerinfo" },

        "ico",
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        "ownerinfo", // name of Source model
        "ico" // key we want to remove
      )
    ]);
  }
};
