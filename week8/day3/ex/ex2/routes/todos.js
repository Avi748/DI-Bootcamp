const express = require('express');

const app_router = express.Router();

const todos = [
    {id:1, name:"todo1", description:"todo1 description"},
    {id:2, name:"todo2", description:"todo2 description"},
    {id:3, name:"todo3", description:"todo3 description"},
    {id:4, name:"todo4", description:"todo4 description"},
];

app_router.get("/todos" , (req, res) => {
    res.json(todos);
});

app_router.post("/todos" , (req, res) => {
    console.log(req.body);
    const new_item = {...req.body, id:todos.length + 1};
    todos.push(new_item);
    res.status(201).json(todos);
});

app_router.put("/todos/:id" , (req, res) => {
    const {id} = req.params;
    const {name, description} = req.body;
    const index = todos.findIndex(item => item.id == id)

    if(index === -1) return res.sendStatus(404);
    todos[index] = {...todos[index], name:name, description:description};
    res.json(todos);
});

app_router.delete("/todos/:id" , (req, res) => {
    const {id} = req.params
    const index = todos.findIndex(item => item.id == id);

    if(index === -1) return res.sendStatus(404);
    todos.splice(index, 1);
    res.json(todos);
});


module.exports = {app_router};