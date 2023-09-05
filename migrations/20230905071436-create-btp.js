'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Btps', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    Isin: {
      allowNull: false,
      type: Sequelize.STRING
    },
    Sigla: {
      allowNull: false,
      type: Sequelize.STRING
    },
    UltimoPrezzo: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    RendimentoNetto: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    CedolaNetta: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    RendimentoTotale: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    EmissioneScadenza: {
      allowNull: false,
      type: Sequelize.STRING
    },
    AnniResidui: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    CedolaLorda: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    CreditoDimposta: {
      allowNull: false,
      type: Sequelize.FLOAT
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
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('Btps');
}
