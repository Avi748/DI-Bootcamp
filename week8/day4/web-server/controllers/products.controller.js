const {products} = require('../config/db.js');

const getAllProducts = (req, res) => {
    res.json(products)
}

const postProduct = (req, res) => {
    console.log(req.body);
    const new_product = {...req.body, id:products.length + 1};
    products.push(new_product);
    res.status(201).json(products)
}

module.exports = {getAllProducts, postProduct}