const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({

rol: {
type: String,
required: true
},
});

module.exports = mongoose.model('usuarios', UsuariosSchema);
