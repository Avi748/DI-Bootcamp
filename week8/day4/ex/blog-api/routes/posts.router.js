const express = require('express');
const {getAllBlogs, getBlogPost, addBlogPost, updateBlogPost, deleteBlogPost} = require("../controllers/posts.controller.js");

const posts_router = express.Router();

posts_router.get("/posts", getAllBlogs);

posts_router.get("/posts/:id", getBlogPost);

posts_router.post('/posts', addBlogPost);

posts_router.put('/posts/:id', updateBlogPost);

posts_router.delete('/posts/:id', deleteBlogPost);

module.exports = {posts_router};