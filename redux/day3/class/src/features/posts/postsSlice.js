import { createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit";
import 'axios'
import axios from "axios";

const initialState = {
    posts : [],
    status : '',
    author: -1
}

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPost = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POST_URL);
    return response.data
})

const postsSlice = createSlice ({
    name:'posts',
    initialState,
    status : '',
    reducers: {
        addPost : {
            reducer(state, action){
              const new_post = {id:nanoid(), userId:nanoid(), title: action.payload.a, content: action.payload.b,
                reactions:{ thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0,}}
              state.posts.push(new_post)
            },
            prepare(title, content) {
                return {payload : {a : title, b : content}}
            }
          },
        addReaction : (state, action) => {
            const {id, name} = action.payload
            const post = state.posts.find(post => post.id === id);
            if(post){
                post.reactions[name]++
            }
        },

        filterAuthor: (state, action) => {
            state.author = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(fetchPost.pending, (state, action) => {
            state.status = 'loading'
        });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // state.push(action.payload)
            const loadedPosts = action.payload.map(post => {
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                };
                return post
            })
            state.posts = loadedPosts
        });
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.status = 'failed'
        });
    }
});

export const {addPost, addReaction, filterAuthor} = postsSlice.actions;
export default postsSlice.reducer;