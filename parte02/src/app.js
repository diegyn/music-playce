const express = require("express");
const app = express();
const songRoutes = require("./routes/songs");

app.use(express.json());
app.use(songRoutes);

module.exports = app;
