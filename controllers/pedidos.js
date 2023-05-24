const express = require('express');
const Pedidos = require('../models/Pedidos');

const Pedidos = async (req, res = express.request ) => {
    const Pedidos = Pedidos(req.body);

    try {
        Pedidos.id = req.uid;
        const saved = await Pedidos.save();
        res.json({
            ok:true,
            Pedidos: saved
        })
    } catch(error) {
        console.log( error )
        res.statusCode(500).json({
            ok: false,
            Pedidos: 'internal error'
        })
    }

}

ListarPedidos = async (req, res = express.request ) => {
    const Pedidos = await Pedido.find().populate('id, fecha')
    
    try {
        res.statusCode(200).json({
            ok: true,
            Coordenadas,
        })
    } catch(error) {
        console.log( error )
        res.statusCode(500).json({
            ok: false,
            error,
        })
    }

}

module.exports = {
    Coordenadas,
    ListarCoordenadas
}