/**
 * server
 * config - conncetion to database
 * models - queries to database
 * controllers - function implementation code
 * routes - route implementation code
 */
const express = require('express');
// const bp = require('body-parser');
const {users_router} = require('./routes/users.routes.js');
const {products_router} = require('./routes/products.routes.js');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on port ${process.env.PORT}`);
});

app.use('/' , express.static(__dirname + '/public'));

app.use(users_router);

app.use(products_router);

/** .env */