import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books : [
        {id:1, title:'Book1', author: 'Book1 Author', genre:'Thriller'},
        {id:2, title:'Book2', author: 'Book2 Author', genre:'Fantasy'},
        {id:3, title:'Book3', author: 'Book3 Author', genre:'Horror'},
        {id:4, title:'Book4', author: 'Book4 Author', genre:'Romance'},
        {id:5, title:'Book5', author: 'Book5 Author', genre:'Horror'},
        {id:6, title:'Book6', author: 'Book6 Author', genre:'Science fiction'},
        {id:7, title:'Book7', author: 'Book7 Author', genre:'Mystery'},
        {id:8, title:'Book8', author: 'Book8 Author', genre:'Biography'},
        {id:9, title:'Book9', author: 'Book9 Author', genre:'Fantasy'},
        {id:10, title:'Book10', author: 'Book10 Author', genre:'Adventure'},
        {id:11, title:'Book11', author: 'Book11 Author', genre:'Thriller'},
        {id:12, title:'Book12', author: 'Book12 Author', genre:'Mystery'},
    ],
}

const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers:{}
})

export default booksSlice.reducer;