const m2_equipes = require("../models/Equipes");

module.exports = {
  async create(nome) {
    if (nome.length > 150) {
      return "Limite máximo de caracteres atingido (150)";
    }
    await m2_equipes.create({ nome });
    return "Equipe criada com sucesso";
  },
  async read() {
    const equipes = await m2_equipes.findAll();
    return equipes;
  },

  async update(idequipe, nome) {
    if (nome.length > 150) {
      return "Limite máximo de caracteres atingido (150)";
    }
    await m2_equipes.update({ nome }, { where: { idequipe } });
    return "Equipe alterado com sucesso.";
  },

  async delete(idequipe) {
    const equipe = await m2_equipes.update(
      { ativo: 0 },
      { where: { idequipe } }
    );
    return "Equipe deletada com sucesso.";
  },
  async readAtivado() {
    const equipes = await m2_equipes.findAll({ where: { ativo: 1 } });
    return equipes;
  },
  async readDesativado() {
    const equipes = await m2_equipes.findAll({ where: { ativo: 0 } });
    return equipes;
  },
};
