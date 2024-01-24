const express = require('express');
const {getAllProducts, getProducts} = require('../controllers/products.controller.js');

const product_router = express.Router();

product_router.get('/', getAllProducts);
product_router.get('/:id', getProducts);

module.exports = {product_router}