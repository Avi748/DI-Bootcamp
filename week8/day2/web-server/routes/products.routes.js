const express = require('express');
// const {products} = require('../config/db.js')
const {getAllProducts, postProduct} = require('../controllers/products.controller.js')

const products_router = express.Router();

products_router.get("/products", getAllProducts);

products_router.post('/products', postProduct)

module.exports = {products_router}