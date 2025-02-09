//Rutas
const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/compras_controllers');

//estrellas
router.get('/borrar/:id', comprasController.deleteCompra);
router.get('/', comprasController.getCompras);
router.get('/modificar/:id', comprasController.getACompra);
router.post('/', comprasController.createCompras);
router.get('/id/:id', comprasController.listcompras);
router.put('/:id', comprasController.updateCompra);
router.get('/rol/:id',comprasController.rolUsuario);
router.post('/cantidad/', comprasController.getComprasCantidad);


module.exports = router;