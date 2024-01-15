const {_getAllBlogs, 
        _getBlogPost, 
        _addBlogPost,
        _updateBlogPost,
        _deleteBlogPost} = require('../models/posts.models.js');


const getAllBlogs = (req, res) => {
    _getAllBlogs()
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'Not Found'})
    })
};

const getBlogPost = async (request, response) => {
    console.log(request.params);
    const {id} = request.params;
    try {
        const data = await _getBlogPost(id);
        response.status(200).json(data)
    } catch (error) {
        response.status(404).json({msg: 'Not Found'})
    }
};

const addBlogPost = (req, res) => {
    console.log(req.body);
    const {title, content} = req.body
    _addBlogPost(title, content)
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.status(404).json({msg: 'can not add a new post'})
    })
};


const updateBlogPost = (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    _updateBlogPost(id, title, content)
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'Blog post id not found'});
    })
};


const deleteBlogPost = (req, res) => {
    const {id} = req.params
    _deleteBlogPost(id)
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'Blog post id not found'});
    })
};

module.exports = {getAllBlogs, getBlogPost, addBlogPost, updateBlogPost, deleteBlogPost};