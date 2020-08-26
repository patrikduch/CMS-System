"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("modulefeature", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      code: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

      priority: {
        type: Sequelize.INTEGER
      },

      isChanged: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      isEnabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      isFeature: {
        /* Check if is feature otherwise is module */
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      sectionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Section", // name of Target model
          key: "id" // key in Target model that we're referencing
        }
        //onUpdate: 'CASCADE',
      },

      moduleFeatureCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "modulefeaturecategory", // name of Target model
          key: "id" // key in Target model that we're referencing
        }
        //onUpdate: 'CASCADE',
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("modulefeature");
  }
};
