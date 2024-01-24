import React from 'react'
import posts from '../data/posts.json'

class PostList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const postOne = posts[0]
        const postTwo = posts[1]
        return <div>
            <h1>Hi This is a Title</h1>
            <h1>{postOne.title}</h1>
            <p>{postOne.content}</p>
            <h1>{postTwo.title}</h1>
            <p>{postTwo.content}</p>
        </div>
    }
}

export default PostList