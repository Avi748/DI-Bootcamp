const express = require('express');

const app_router = express.Router();

app_router.get("/" , (req, res) => {
    res.json();
});

app_router.get("/about" , (req, res) => {
    res.json();
});

module.exports = {app_router};