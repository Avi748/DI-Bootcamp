const {db} = require('../config/db.js');

const _getAllUsers = () => {
    return db('users').select('*').orderBy('id')
}

const _getUser = (userid) => {
    return db('users').select('*').where({id:userid})
}

const _addUser = (name, email, password) => {
    return db('users')
    .insert({name:name, email:email, password:password})
    .returning('*')
}

const _updateUser = (userid, name, email, password) => {
    return db('users').update({name:name, email:email, password:password}).where({id:userid})
}

const _deleteUser = (userid) => {
    return db('users').where({id:userid}).del()
}

module.exports = {_getAllUsers, _getUser, _addUser, _updateUser, _deleteUser}