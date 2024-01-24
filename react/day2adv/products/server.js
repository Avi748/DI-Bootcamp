const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {product_router} = require('./routes/products.router.js')

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3001, () => {
    console.log('run on port 3001');
});

app.use(product_router);