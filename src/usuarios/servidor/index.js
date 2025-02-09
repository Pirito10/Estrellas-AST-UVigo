const express = require('express');
const DBconnection =require('./config/db');
const cors = require('cors');
const usersRouters_u=require ('./routes/usuarios');

//Se crea el servidor
const app = express();

//Conectar a DB
DBconnection();
app.use(cors())

//habilitar datos JSON
app.use(express.json());
//Ruta
app.use('/usuarios',usersRouters_u);
app.listen(3002, () => {
    console.log('El servidor usuarios está activo')
})



