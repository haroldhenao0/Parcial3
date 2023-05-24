const { Schema, model } = require('mongoose');

const Pedidos = Schema({
    id: {
        type: Schema.Types.ObjectId,
        requiere: true,
        unique: true
    },
    fecha: {
        type: Date,
        require: true
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

Pedidos.virtual('tareas', {
    ref: "Coordenadas",
    localField: "_id",
    foreignField: "pedido_id",
    justOne: false,
})

module.exports = model('Pedidos', Pedidos);