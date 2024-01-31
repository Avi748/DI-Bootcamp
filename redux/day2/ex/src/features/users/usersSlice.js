import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchAsyncUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(response.status);
        if(response.status === 200){
            const data =  response.json();
            return data;
        }
    } catch (error) {
       console.log(error);
    }
})

const usersSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchAsyncUsers.fulfilled, (state, action) => {
            return action.payload; //action.payload = data
        })
        builder.addCase(fetchAsyncUsers.rejected, (state, action) => {
            const text = "API fail"
            state.push({name : text})
            console.log(action.payload);
        })
    }
});

export const {addUser, addUserPrepare} = usersSlice.actions;
export default usersSlice.reducer;