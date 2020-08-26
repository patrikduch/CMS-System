"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        { tableName: "Module" },

        "isChanged",
        {
		  type: Sequelize.BOOLEAN,
		  allowNull: false
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /* Reverting commands */

    return Promise.all([
      queryInterface.removeColumn(
        "Module", // name of Source model
        "isChanged" // key we want to remove
      )
    ]);
  }
};
