'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos', { 
      Id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
        },
      paciente_Id: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'pacientes', key:'id'},
        onUpdate:'CASCADE',
        },
      psicologo_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'psicologos', key: 'id'},
        onUpdate:'CASCADE',
        },
      data_atendimento: {
        type: Sequelize.DATE,
        allowNull: false,
       },
       observacao: {
         type: Sequelize.TEXT,
         allowNull: false,
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
    await queryInterface.dropTable('atendimentos');
      }
};
