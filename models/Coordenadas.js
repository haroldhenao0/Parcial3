const { Schema, model } = require('mongoose');

const Coordenadas = Schema({
    x: {
        type: Number,
        requiere: true,
    },
    y: {
        type: Date,
        require: true
    },
    pedido_id: {
        type: Schema.Types.ObjectId,
        ref: Pedidos
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

Coordenadas.method("toJSON", function() {
    const { __v, pedido_id, ...Object } = this.toObject();
    Object.id = pedido_id;
    return Object;
})

module.exports = model('Coordenadas', Coordenadas);