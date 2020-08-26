"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        { tableName: "ownerinfo" },

        "street",
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),

      queryInterface.addColumn(
        { tableName: "ownerinfo" },

        "city",
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),

      queryInterface.addColumn(
        { tableName: "ownerinfo" },

        "zipcode",
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),

      queryInterface.addColumn(
        { tableName: "ownerinfo" },

        "email",
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
        "street" // key we want to remove
      ),

      queryInterface.removeColumn(
        "ownerinfo", // name of Source model
        "city" // key we want to remove
      ),

      queryInterface.removeColumn(
        "ownerinfo", // name of Source model
        "zipcode" // key we want to remove
      ),

      queryInterface.removeColumn(
        "ownerinfo", // name of Source model
        "email" // key we want to remove
      )
    ]);
  }
};
