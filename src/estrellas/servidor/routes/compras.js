//Rutas
const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/compras_controllers');

//estrellas
//router.delete('/:id', comprasController.deleteCompra);
router.get('/', comprasController.getCompras);
router.post('/', comprasController.createCompras);
router.get('/id/:id', comprasController.listcompras);
router.get('/:id', comprasController.deleteCompra);
router.put('/:id', comprasController.updateCompra);


module.exports = router;