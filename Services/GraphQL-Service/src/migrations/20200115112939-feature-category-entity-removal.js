"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("featurecategory");
  },

  down: (queryInterface, Sequelize) => {}
};
