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

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3001, () => {
    console.log('run on port 3001');
});

app.use('/' , express.static(__dirname + '/public'));

app.use(users_router);

app.use(products_router);