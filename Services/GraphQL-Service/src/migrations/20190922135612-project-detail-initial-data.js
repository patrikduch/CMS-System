'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('projectdetail', [
      {
        "Name": "Bakalářská práce",
        "CreatedAt": new Date(),
        "UpdatedAt": new Date()
      }]);

    return await queryInterface.bulkInsert('theme', [
      {
        "Name": "Default",
        "projectId": 1,
        "code": "default-theme",
        "CreatedAt": new Date(),
        "UpdatedAt": new Date()
      }]);

    

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
