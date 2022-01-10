const Sequelize = require("sequelize");
const database = require("../database");
const Equipes = require("./Equipes");

const Usuarios = database.define("m2_usuarios", {
  idusuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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
  },
  ativo: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
});
Equipes.hasOne(Usuarios, { foreignKey: "idequipe" });
module.exports = Usuarios;
