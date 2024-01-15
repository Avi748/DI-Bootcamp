const {db} = require('../config/db.js');

const _getAllBlogs = () => {
    return db('posts').select('*').orderBy('id')
}

const _getBlogPost = (postId) => {
    return db('posts').select('*').where({id:postId})
}

const _addBlogPost = (title, content) => {
    return db('posts')
    .insert({title:title, content:content})
    .returning('*')
}

const _updateBlogPost = (postId, title, content) => {
    return db('posts').update({title:title, content:content}).where({id:postId})
}

const _deleteBlogPost = (postId) => {
    return db('posts').where({id:postId}).del()
}

module.exports = {_getAllBlogs, _getBlogPost, _addBlogPost, _updateBlogPost, _deleteBlogPost}