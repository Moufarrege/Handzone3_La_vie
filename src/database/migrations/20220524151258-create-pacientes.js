'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pacientes', { 
      Id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
       },
       nome: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       email: {
         type: Sequelize.STRING,
         allowNull:false,
       },
       "data-de-nascimento": {
         type: Sequelize.DATE,
         allowNull:false,
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
         type: Sequelize.DATE,
         allowNull: false,
       }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pacientes');
      }
};