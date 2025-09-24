const db = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { title, artist } = req.body;

    if (!title) {
      return res.status(400).json({ error: "É necessário informar o título" });
    }

    if (!artist) {
      return res.status(400).json({ error: "É necessário informar o artista" });
    }

    try {
      const [id] = await db("songs").insert({ title, artist }).returning("id");
      res.status(201).json({ id, title, artist });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Não foi possivel adicionar o registro" });
    }
  },

  async index(req, res) {
    try {
      const songs = await db("songs").select("*");

      res.json(songs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Não foi possivel realizar a busca" });
    }
  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const song = await db("songs").where({ id }).first();

      if (!song) {
        return res
          .status(404)
          .json({ error: "Nenhum registro foi encontrado!" });
      }

      res.json(song);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Não foi possivel realizar a busca" });
    }
  },
};
