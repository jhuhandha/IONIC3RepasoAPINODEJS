const express = require("express");
const {index, guardar, modificar, listar_categoria} = require("./../controladores/producto.controlador");

const router = express.Router();

router.get("/producto", index);
router.get("/producto/categoria", listar_categoria);
router.post("/producto", guardar);
router.put("/producto/:id", modificar);

module.exports = router;