"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        { tableName: "projectdetail" },

        "domainUrl",
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
        "projectdetail",
        "domainUrl"
      )
    ]);
  }
};
