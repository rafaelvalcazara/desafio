const Usuarios = require("../models/Usuarios");
const bcrypt = require("bcrypt");

module.exports = {
  async create(nome, password, login, idequipe) {
    if (nome.length > 150 || password.length > 150 || login.length > 30) {
      return "Limite máximo de caractéres atingido (150)";
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    await Usuarios.create({
      nome: nome,
      password: hashedPassword,
      login: login,
      idequipe: idequipe,
    });
    return "Usuário criado com sucesso.";
  },
  async read() {
    const usuarios = await Usuarios.findAll();
    return usuarios;
  },

  async update(idusuario, nome, password, login, idequipe) {
    if (nome.length > 150 || password.length > 150 || login.length > 30) {
      return "Limite máximo de caractéres atingido (150)";
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    await Usuarios.update(
      {
        nome: nome,
        password: hashedPassword,
        login: login,
        idequipe: idequipe,
      },
      { where: { idusuario } }
    );
    return "Usuário alterado com sucesso.";
  },

  async delete(idusuario) {
    await Usuarios.update({ ativo: 0 }, { where: { idusuario } });
    return "Usuário deletado com sucesso.";
  },
  async readAtivado() {
    const usuarios = await Usuarios.findAll({ where: { ativo: 1 } });
    return usuarios;
  },
  async readDesativado() {
    const usuarios = await Usuarios.findAll({ where: { ativo: 0 } });
    return usuarios;
  },
};
