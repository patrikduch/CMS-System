"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0"),
      queryInterface.bulkDelete("modulefeature", null, { truncate: true }),
      queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1"),
      queryInterface.bulkInsert("modulefeature", [
        {
          name: "Day Notification",
          code: "day-notification",
          description: "Zobrazení dnešního data.",
          priority: 1,
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          sectionId: 2,
          moduleFeatureCategoryId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Fotogalerie",
          code: "gallery_system",
          description: "Integrace fotogalerie.",
          isEnabled: true,
          isChanged: false,
          isFeature: true,
          moduleFeatureCategoryId: 2,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },
        {
          name: "Newsletter subscriber",
          code: "newsletter-subscriber",
          description: "Možnost odběru novinek.",
          sectionId: 2,
          priority: 2,
          moduleFeatureCategoryId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          isChanged: false,
          isEnabled: false,
          isFeature: false
        },

        {
          name: "Recommend Us",
          code: "recommend-us",
          description:
            "Možnost odeslání formuláře pro doporučení dané stránky.",
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          priority: 3,
          sectionId: 2,
          moduleFeatureCategoryId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Write to Us",
          code: "write-us",
          description: "Možnost odeslání e-mailu vlastníkovi webu.",
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          sectionId: 2,
          priority: 4,
          moduleFeatureCategoryId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Top-Articles",
          code: "top-articles",
          description: "Výpis top článků.",
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          sectionId: 2,
          priority: 5,
          moduleFeatureCategoryId: 2,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Owner info",
          description: "Informace o vlastníkovi.",
          code: "owner-info",
          moduleFeatureCategoryId: 1,
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          sectionId: 2,
          priority: 5,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Social icons",
          description:
            "Zobrazení sociálních sití se kterými je daná stránka propojena.",
          code: "social-icons",
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          moduleFeatureCategoryId: 1,
          sectionId: 2,
          priority: 5,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Navigation Bar",
          description: "Vrchní navigace.",
          code: "navigation-bar",
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          moduleFeatureCategoryId: 1,
          sectionId: 1,
          priority: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Copyright information",
          code: "copyright",
          description: "Copyright informace.",
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          moduleFeatureCategoryId: 1,
          sectionId: 3,
          priority: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Cookie consent",
          code: "cookie-consent",
          description: "Potvzení o osouhlasu použivání cookies.",
          isChanged: false,
          isEnabled: false,
          isFeature: false,
          sectionId: 3,
          priority: 2,
          moduleFeatureCategoryId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        },

        {
          name: "Články",
          code: "article_system",
          description: "Integrace článkovacího systému",
          isEnabled: true,
          isChanged: false,
          isFeature: true,
          moduleFeatureCategoryId: 2,
          CreatedAt: new Date(),
          UpdatedAt: new Date()
        }
      ])
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("modulefeature");
  }
};
