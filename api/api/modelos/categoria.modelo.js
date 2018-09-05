const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CategoriaSchema = new Schema({
    nombre : String
});

module.exports = mongoose.model("Categoria", CategoriaSchema, "categoria");