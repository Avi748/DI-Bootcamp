const express = require('express');
const {getAllUsers, getUser, postUser, updateUser, deleteUser} = require("../controllers/users.controller.js");

const users_router = express.Router();

users_router.get("/users", getAllUsers);

users_router.get("/users/:id", getUser);

users_router.post('/users', postUser);

users_router.put('/users/:id', updateUser);

users_router.delete('/users/:id', deleteUser);

module.exports = {users_router}