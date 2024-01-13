const {users} = require('../config/db.js');

const getAllUsers = (req, res) => {
    res.json(users);
};

const getUser = (request, response) => {
    console.log(request.params);
    const {id} = request.params;
    const user = users.find(item => item.id == id);
    if(!user) return response.status(404).json({msg: 'User not found'});
    response.json(user)
}

const searchUser = (req, res) => {
    console.log(req.query);
    const {name} = req.query;
    const filtername = users.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })
    if(filtername.length === 0){
        return res.status(404).json({msg: "User not found"})
    }
    res.json(filtername)
}

const postUser = (req, res) => {
    console.log(req.body);
    const new_user = {...req.body, id:users.length + 1};
    users.push(new_user);
    res.status(201).json(users)
}

const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    const indx = users.findIndex(item => item.id == id)
    if(indx === -1) return res.sendStatus(404);

    users[indx] = {...users[indx], name:name, email:email};

    res.json(users);
}

const deleteUser = (req, res) => {
    const {id} = req.params

    const indx = users.findIndex(item => item.id == id)
    if(indx === -1) return res.sendStatus(404);

    users.splice(indx, 1);
    res.json(users)
}

module.exports = {getAllUsers, getUser, searchUser, postUser, updateUser, deleteUser};