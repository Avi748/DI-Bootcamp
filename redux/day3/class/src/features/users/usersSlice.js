import {createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit'

export const fetchAsyncUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data =  response.json();
    return data;
})

const usersSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUser: (state, action) => {
            state.push({id: nanoid(), name: action.payload})
        },
        addUserPrepare:{
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(text){
                return { payload: {id: nanoid(), name: text} };
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchAsyncUsers.fulfilled, (state, action) => {
            return action.payload; //action.payload = data
        })
    }
});

export const {addUser, addUserPrepare} = usersSlice.actions;
export default usersSlice.reducer;