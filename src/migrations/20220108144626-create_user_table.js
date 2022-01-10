"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("m2_usuarios", {
      idusuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.CHAR(150),
        allowNull: false,
      },
      password: {
        type: Sequelize.CHAR(150),
        allowNull: false,
      },
      login: {
        type: Sequelize.CHAR(30),
        allowNull: false,
      },
      idequipe: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "m2_equipes",
          key: "idequipe",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    return queryInterface.dropTable("m2_usuarios");
  },
};
