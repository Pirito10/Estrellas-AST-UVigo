const mongoose = require('mongoose');

const ComprasSchema = mongoose.Schema({

id_articulo: {
type: String,
required: true
},
id_cliente: {
type: String,
required:true
},
cantidad: {
type: Number,
required: true
},
comprador: {
type: String,
required: true
},
direccion: {
type: String,
required: true
},
date: {
type: Date,
default: Date.now()
},

});

module.exports = mongoose.model('compras', ComprasSchema);
