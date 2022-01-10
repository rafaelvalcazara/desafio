"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("m2_usuarios", [
      {
        nome: "João Francisco Nascimento",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG", //bcrpyt
        login: "jfnascimento",
        idequipe: "1",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Renata Oliveira Santos",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "renatasantos",
        idequipe: "1",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Paulo Ribeiro Silva",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "pribeiro",
        idequipe: "2",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Ricardo Almeida",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "alemida",
        idequipe: "2",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Maria Tereza da Silva",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "mariatereza",
        idequipe: "3",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Odete Almeida",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "almeidaodete",
        idequipe: "3",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Luiz Oliveira",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "luizoliveira",
        idequipe: "4",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Rafael Augusto",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "gutorafael",
        idequipe: "4",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Barbara Lopes",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "babilopes",
        idequipe: "5",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "João Augusto Neto",
        password:
          "$2a$10$.DD/Gh6NMA5LqhhiYXEbxeYCrgoYz7Tjlqnq8kb0XJjDF0G2LeoaG",
        login: "neto",
        idequipe: "5",
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("m2_usuarios", null, {});
  },
};
