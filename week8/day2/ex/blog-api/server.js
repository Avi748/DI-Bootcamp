const express = require('express');

const data = [
    {id: 1, title: "Blog1", content: "Blog1 content"},
    {id: 2, title: "Blog2", content: "Blog2 content"},
    {id: 3, title: "Blog3", content: "Blog3 content"},
    {id: 4, title: "Blog4", content: "Blog4 content"}
];

const blog = express();

blog.use(express.urlencoded({extended:true}));
blog.use(express.json());

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

blog.post('/', (req, res) => {
    console.log(req.body);
    const new_blog = {...req.body, id:data.length + 1};
    data.push(new_blog);
    res.json(data)
})

blog.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;

    const index = data.findIndex(blog=> blog.id == id)
    if(index === -1) return res.sendStatus(404);

    data[index] = {...data[index], title:title, content:content};

    res.json(data);
});

blog.delete('/:id', (req, res) => {
    const {id} = req.params

    const index = data.findIndex(blog => blog.id == id)
    if(index === -1) return res.sendStatus(404);

    data.splice(index, 1);
    res.json(data)
});