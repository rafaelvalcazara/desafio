"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("m2_equipes", {
      idequipe: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.CHAR(150),
        allowNull: false,
      },
      ativo: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("m2_equipes");
  },
};
