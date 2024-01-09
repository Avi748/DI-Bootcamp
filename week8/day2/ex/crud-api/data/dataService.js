const axios = require('axios');

const fetchPosts = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
    }
};

module.exports = {fetchPosts}