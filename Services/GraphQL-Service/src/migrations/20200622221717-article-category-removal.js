"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn("article", "articleCategoryId"),
      queryInterface.dropTable("articleCategory"),
    ]);
  },

  down: (queryInterface, Sequelize) => {},
};
