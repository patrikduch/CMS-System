'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('module', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},

			sectionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Section', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        //onUpdate: 'CASCADE',
        //onDelete: 'SET NULL',
      }
			

			
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('module');
	}
};
