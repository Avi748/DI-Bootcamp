import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ageUpAsync = createAsyncThunk('Increment', (count) => {
    return new Promise((res) => { 
      setTimeout(res, 4000, count); 
    });
});

export const ageDownAsync = createAsyncThunk('Decrement', (count) => {
    return new Promise((res) => { 
      setTimeout(res, 2000, count); 
    });
});

const initialState = {
    count:0,
    isLoading: null,
}

export const counterSlice = createSlice({
    name : 'counter', 
    initialState,
    reducers: {
        increment : (state) => {
            state.count += 1
            state.isLoading = false
        },
        decrement : (state) => {
            state.count -= 1
            state.isLoading = false
        },
        reset : (state) => {
            state.count = 0
            state.isLoading = false
        },
    },
    extraReducers(builder){
        builder.addCase(ageUpAsync.fulfilled, (state, action) => {
            state.count += action.payload;
            state.isLoading = false;
        })
        builder.addCase(ageDownAsync.fulfilled, (state, action) => {
            state.count -= action.payload;
            state.isLoading = false;
        })
        builder.addCase(ageUpAsync.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(ageDownAsync.pending, (state, action) => {
            state.isLoading = true
        })
    }
});

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;