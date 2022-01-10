const UsuariosUseCases = require("../usecases/Usuarios.usecases");

module.exports = {
  async create(req, res) {
    const { nome, password, login, idequipe } = req.body;

    const usuario = await UsuariosUseCases.create(
      nome,
      password,
      login,
      idequipe
    );
    return res.json({
      retorno: usuario,
    });
  },

  async read(req, res) {
    const usuarios = await UsuariosUseCases.read();
    return res.json(usuarios);
  },

  async update(req, res) {
    const { idusuario, nome, password, login, idequipe } = req.body;

    const usuario = await UsuariosUseCases.update(
      idusuario,
      nome,
      password,
      login,
      idequipe
    );
    return res.json({
      retorno: usuario,
    });
  },

  async delete(req, res) {
    const { idusuario } = req.body;

    const usuario = await UsuariosUseCases.delete(idusuario);
    return res.json({
      retorno: usuario,
    });
  },

  async readAtivado(req, res) {
    const usuario = await UsuariosUseCases.readAtivado();
    return res.json({
      retorno: usuario,
    });
  },

  async readDesativado(req, res) {
    const usuario = await UsuariosUseCases.readDesativado();
    return res.json({
      retorno: usuario,
    });
  },
};
