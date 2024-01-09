const express = require('express');

const data = [
    {id: 1, title: "Blog1", content: "Blog1 content"},
    {id: 2, title: "Blog2", content: "Blog2 content"},
    {id: 3, title: "Blog3", content: "Blog3 content"},
    {id: 4, title: "Blog4", content: "Blog4 content"}
];

const blog = express();
blog.listen(3000);

blog.get("/", (request, response) => {
    response.json(data)
});

blog.get("/:id", (request, response) => {
    const {id} = request.params;
    const blog_id = data.find(item => item.id == id);
    if(!blog_id) return response.status(404).json({msg: 'Blog post not found'});
    response.json(blog_id)
});