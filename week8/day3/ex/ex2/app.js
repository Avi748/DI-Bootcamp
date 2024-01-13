const express = require('express');
const {app_router} = require('./routes/todos.js');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000);

app.use(app_router);