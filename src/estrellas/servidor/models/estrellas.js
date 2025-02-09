const mongoose = require('mongoose');

const EstrellasSchema = mongoose.Schema({

nombre: {
type: String,
required: true
},
tipo_espectral: {
type: String,
required:false
},
luminosidad: {
type: Number,
required: false
},
distancia: {
type: Number,
required: false
},
masa: {
type: Number,
required: false
},
radio: {
type: Number,
required: false
},
edad: {
type: Number,
required: false
},
constelacion: {
type: String,
required: false
},
createAt: {
type: Date,
default: Date.now()
},
precio: {
type: Number,
required: true
},
cantidad: {
type: Number,
required: true
    },
examen: {
type: String,
required: false
}
});

module.exports = mongoose.model('estrellas', EstrellasSchema);
