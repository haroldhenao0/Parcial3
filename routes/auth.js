const express = require('express');
const router = express.Router();
const { registrarCoordenada, listarCoordenada} = express('..controllers/auth');
const { registrarPedido, listarPedido} = express('..controllers/auth');


router.post("/", registrarPedido)
router.get("/new", listarPedido)
router.post("/new1", registrarCoordenada)
router.get("/new2", listarCoordenada)


module.exports = router;