const express = require('express');
const {auth} = require('../middlewares/utils.js')
const {getAllUsers, 
    getUser, 
    searchUser, 
    postUser,
    updateUser,
    deleteUser} = require('../controllers/users.controller.js')

const users_router = express.Router();

users_router.get("/users",auth , getAllUsers);

//params
/** Read */
users_router.get("/users/:id", getUser);

//query
/** Read */
users_router.get('/search', searchUser)

/** Create - a new user - POST*/

users_router.post('/users', postUser)

/** Update -update a user - PUT */
/** user id - to update - params
 * data - name , email to update - body
 */
users_router.put('/users/:id', updateUser);

/** Delete - delete a user */
/** id as params - delete user */
users_router.delete('/users/:id', deleteUser);

module.exports = {users_router}
