const express = require('express');
const Coordenadas = require('../models/Coordenadas');

const Coordenadas = async (req, res = express.request ) => {
    const Coordenadas = Coordenadas(req.body);

    try {
        Coordenadas.pedido_id = req.uid;
        const saved = await Coordenadas.save();
        res.json({
            ok:true,
            Coordenadas: saved
        })
    } catch(error) {
        console.log( error )
        res.statusCode(500).json({
            ok: false,
            Coordenadas: 'internal error'
        })
    }

}

ListarCoordenadas = async (req, res = express.request ) => {
    const Coordenadas = await Coordenadas.find().populate('x, y, pedidos_id')
    
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