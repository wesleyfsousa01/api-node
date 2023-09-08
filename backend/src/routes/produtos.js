const express = require('express');
const router = express.Router();
const ProdutoController = require('../controller/produtoController.js');

router.get('/products', ProdutoController.findAll);
router.put('/products/:id', ProdutoController.update);


module.exports = router;