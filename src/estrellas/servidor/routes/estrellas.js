//Rutas
const express = require('express');
const router = express.Router();
const estrellasController = require('../controllers/estrellas_controllers');

//estrellas
router.post('/', estrellasController.createEstrellas);
router.get('/', estrellasController.getEstrellas);
router.put('/:id', estrellasController.updateEstrella);
router.delete('/:id', estrellasController.deleteEstrella);
router.get('/precio/:precio',estrellasController.getEstrella);
router.get('/id/:id',estrellasController.getEstrella);
router.get('/rol/:id',estrellasController.rolUsuario);
router.get('/:id',estrellasController.getAEstrella);
router.patch('/:id', estrellasController.patchEstrellas);



module.exports = router;