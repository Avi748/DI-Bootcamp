const {db} = require('../config/db.js')

const _getAllProducts = () => {
    return db("products").select("product_id", "product_name", "price", "description")
    .orderBy('product_name');
}

const _getProducts = (id) => {
    return db("products").select("product_id", "product_name", "price", "description")
    .where({product_id : id})
}

module.exports = {_getAllProducts, _getProducts}