"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        { tableName: "ownerinfo" },

        "dic",
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
        "dic" // key we want to remove
      )
    ]);
  }
};
