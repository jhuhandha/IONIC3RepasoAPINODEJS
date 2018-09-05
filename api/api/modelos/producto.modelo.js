const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ProductoSchema = new Schema({
    nombre : String,
    precio: Number,
    categoria : {
        type : Schema.Types.ObjectId,
        ref: "Categoria"
    }
});

module.exports = mongoose.model("Producto", ProductoSchema, "producto");