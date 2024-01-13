const express = require('express');
const {app_router} = require('./routes/index.js');

const app = express();

app.listen(3000);

app.use(app_router);