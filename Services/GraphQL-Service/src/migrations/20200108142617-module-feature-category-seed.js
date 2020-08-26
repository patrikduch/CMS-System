"use strict";

/*
  Seed data of modulefeature category.
*/
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0"),
      queryInterface.bulkDelete("modulefeaturecategory", null, {
        truncate: true
      }),
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"),
      queryInterface.bulkInsert("modulefeaturecategory", [
        {
          name: "Ostatní",
          description: "Veškeré moduly a feature, které nelze zařadit.",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Obsah",
          description:
            "Veškeré moduly a featury, které naleží obsahové části webu.",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ])
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("modulefeaturecategory");
  }
};
