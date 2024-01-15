const {_getAllUsers, _getUser, _addUser, _updateUser, _deleteUser} = require('../models/users.models.js');

const getAllUsers = (req, res) => {
    _getAllUsers()
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'Not Found'})
    })
};

const getUser = async (request, response) => {
    console.log(request.params);
    const {id} = request.params;
    try {
        const data = await _getUser(id);
        response.status(200).json(data)
    } catch (error) {
        response.status(404).json({msg: 'Not Found'})
    }
}

const postUser = (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body
    _addUser(name, email, password)
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.status(404).json({msg: 'can not add a user'})
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, email, password} = req.body;
    _updateUser(id, name, email, password)
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'User id not found'});
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params
    _deleteUser(id)
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'User id not found'});
    })
}

module.exports = {getAllUsers, getUser, postUser, updateUser, deleteUser};