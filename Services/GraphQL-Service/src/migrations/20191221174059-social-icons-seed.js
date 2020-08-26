"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert("socialicon", [
        {
          name: "Facebook",
          code: "facebook_social",
          url: "https://www.facebook.com",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ]),

      queryInterface.bulkInsert("socialicon", [
        {
          name: "Linkedin",
          code: "linkedIn_social",
          url: "https://www.linkedin.com",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ]),

      queryInterface.bulkInsert("socialicon", [
        {
          name: "Twitter",
          code: "twitter_social",
          url: "https://twitter.com",
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ])
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("socialicon");
  }
};
