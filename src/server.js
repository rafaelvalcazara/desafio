// index.js
const express = require("express");
const routes = require("./routes");
const db = require("../src/database");

// start app
const app = express();
app.use(express.json());
app.use(routes);

app.listen(3001);
(async () => {
  const Equipes = require("./models/Equipes");
  const Usuarios = require("./models/Usuarios");
  await db.sync();
  try {
    await db.sync();
  } catch (error) {
    console.log(error);
  }
})();
