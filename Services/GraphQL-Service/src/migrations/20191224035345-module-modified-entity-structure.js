"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        { tableName: "module" },

        "code",
        {
          type: Sequelize.STRING,
          allowNull: false
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /* Reverting commands */

    return Promise.all([
      queryInterface.removeColumn(
        "module", // name of Source model
        "code" // key we want to remove
      )
    ]);
  }
};
