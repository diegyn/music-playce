const express = require("express");
const routes = express.Router();
const SongController = require("../controllers/SongController");

routes.post("/songs", SongController.create);
routes.get("/songs", SongController.index);
routes.get("/songs/:id", SongController.show);

module.exports = routes;
