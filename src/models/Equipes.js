const Sequelize = require("sequelize");
const database = require("../database/index");

const Equipes = database.define("m2_equipes", {
  idequipe: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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
});

module.exports = Equipes;
