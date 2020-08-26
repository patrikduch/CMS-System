"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0"),
      queryInterface.bulkDelete("module", null, { truncate: true }),
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"),
      queryInterface.bulkInsert("module", [
        {
          name: "Day Notification",
          sectionId: 2,
          priority: 1,
          code: "day-notification",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },
        {
          name: "Newsletter subscriber",
          sectionId: 2,
          priority: 2,
          code: "newsletter-subscriber",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Recommend Us",
          sectionId: 2,
          priority: 3,
          code: "recommend-us",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Write to Us",
          sectionId: 2,
          priority: 4,
          code: "write-us",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Top-Articles",
          sectionId: 2,
          priority: 5,
          code: "top-articles",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Owner info",
          sectionId: 2,
          priority: 5,
          code: "owner-info",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Social icons",
          sectionId: 2,
          priority: 5,
          code: "social-icons",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Navigation Bar",
          sectionId: 1,
          priority: 1,
          code: "navigation-bar",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Copyright information",
          sectionId: 3,
          priority: 1,
          code: "copyright",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        },

        {
          name: "Cookie consent",
          sectionId: 3,
          priority: 2,
          code: "cookie-consent",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false
        }
      ])
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("module");
  }
};
