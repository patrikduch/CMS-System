"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      { tableName: "Module" },

      "moduleCategoryId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "modulecategory",
          key: "id"
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /* Reverting commands */

    return Promise.all([
      queryInterface.removeColumn(
        "Module", // name of Source model
        "modulecategory" // key we want to remove
      )
    ]);
  }
};
