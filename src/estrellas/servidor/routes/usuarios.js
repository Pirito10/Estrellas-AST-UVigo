//Rutas
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios_controllers');

//estrellas
router.get('/', usuariosController.getUsuarios); //lista todos usuarios [admin]
router.post('/', usuariosController.createUsuario); //añade usuarios 
router.get('/id/:id',usuariosController.getAUsuario); //busca un solo usuario
router.get('/rol/:id',usuariosController.rolUsuario)
router.delete('/:id', usuariosController.deleteUsuarios); 



module.exports = router;