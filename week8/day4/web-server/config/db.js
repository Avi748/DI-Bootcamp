const knex = require('knex')
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST, //'127.0.0.1'
        port: process.env.DB_PORT,
        user: process.env.DB_USER, //'postgres'
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
});

const users = [
    {id:1, name:'John', email:"John@gmail.com"},
    {id:2, name:'Marry', email:"Mary@gmail.com"},
    {id:3, name:'Anne', email:"Anne@gmail.com"},
];

const products = [
    {id:1, name:'item1', desc:"item1 desc"},
    {id:2, name:'item2', desc:"item2 desc"},
    {id:3, name:'item3', desc:"item3 desc"},
];

module.exports = {db, users, products}