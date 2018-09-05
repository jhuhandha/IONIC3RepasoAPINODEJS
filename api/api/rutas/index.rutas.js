const express = require("express");

var app = express();

app.use("/api", require("./producto.rutas"));

module.exports = app;