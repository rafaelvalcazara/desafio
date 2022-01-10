const EquipesUseCases = require("../usecases/Equipes.usecases");

module.exports = {
  async create(req, res) {
    const { nome } = req.body;

    const equipe = await EquipesUseCases.create(nome);
    return res.json({
      retorno: equipe,
    });
  },

  async read(req, res) {
    const equipes = await EquipesUseCases.read();
    return res.json(equipes);
  },

  async update(req, res) {
    const { idequipe, nome } = req.body;

    const equipe = await EquipesUseCases.update(idequipe, nome);
    return res.json({
      retorno: equipe,
    });
  },

  async delete(req, res) {
    const { idequipe } = req.body;

    const equipe = await EquipesUseCases.delete(idequipe);
    return res.json({
      retorno: equipe,
    });
  },
  async readAtivado(req, res) {
    const equipes = await EquipesUseCases.readAtivado();
    return res.json({
      retorno: equipes,
    });
  },

  async readDesativado(req, res) {
    const equipes = await EquipesUseCases.readDesativado();
    return res.json({
      retorno: equipes,
    });
  },
};
