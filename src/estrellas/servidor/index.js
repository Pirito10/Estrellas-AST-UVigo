const express = require('express');
const DBconnection =require('./config/db');
const cors = require('cors');
const usersRouters_e=require ('./routes/estrellas');

//Se crea el servidor
const app = express();

//Conectar a DB
DBconnection();
app.use(cors())

//habilitar datos JSON
app.use(express.json());
//Ruta
app.use('/estrellas',usersRouters_e);
app.listen(3001, () => {
    console.log('El servidor  estrellas está activo')
})


