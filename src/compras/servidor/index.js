const express = require('express');
const DBconnection =require('./config/db');
const cors = require('cors');
const usersRouters_c=require ('./routes/compras');

//Se crea el servidor
const app = express();

//Conectar a DB
DBconnection();
app.use(cors())

//habilitar datos JSON
app.use(express.json());
//Ruta
app.use('/compras', usersRouters_c);
app.listen(3003, () => {
console.log('El servidor compras está activo')
})

