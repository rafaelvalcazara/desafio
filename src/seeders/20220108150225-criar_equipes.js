"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("m2_equipes", [
      {
        nome: "Equipe Laranja",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Equipe Azul",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Equipe Vermelha",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Equipe Roxa",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Equipe Verde",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Equipe Cinza",
        ativo: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("m2_equipes", null, {});
  },
};
