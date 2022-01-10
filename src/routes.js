const express = require("express");
const EquipesController = require("./controllers/Equipes.controller");
const UsuariosController = require("./controllers/Usuarios.controller");
const router = express.Router();

//equipes
router.post("/equipes", EquipesController.create);
router.post("/equipes/update", EquipesController.update);
router.post("/equipes/delete", EquipesController.delete);
router.get("/equipes/ativos", EquipesController.readAtivado);
router.get("/equipes/desativados", EquipesController.readDesativado);
router.get("/equipes", EquipesController.read);

//usuarios

router.post("/usuarios", UsuariosController.create);
router.post("/usuarios/update", UsuariosController.update);
router.post("/usuarios/delete", UsuariosController.delete);
router.get("/usuarios/ativos", UsuariosController.readAtivado);
router.get("/usuarios/desativados", UsuariosController.readDesativado);
router.get("/usuarios", UsuariosController.read);
module.exports = router;
