const {_getAllProducts, _getProducts} = require("../models/products.models.js");

const getAllProducts = (req, res) => {
    _getAllProducts()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg:"Not Found"})
    })
}

const getProducts = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await _getProducts(id)
        if(product.length === 0)
            return res.status(404).json({msg: "No Product Found"})
        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(404).json({msg:"Not Found"})
    }
}

module.exports = {getAllProducts, getProducts}