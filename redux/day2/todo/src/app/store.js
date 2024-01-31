import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../features/todoSlice'

import usersReducer from '../features/users/usersSlice'

// import { addTask, addPosts } from "../features/todoSlice";

const store = configureStore({
    reducer : {
        todos : todoReducer,
        users : usersReducer
    },
});

// const thunkExample = (dispatch, getState) => {
//     const stateBefore = getState();
//     console.log('prev state => ',stateBefore);
//     setTimeout(() => {
//         dispatch(addTask({text: 'thunk example'}))
//     }, 5000)
//     console.log('current state =>', getState());
// }

// store.dispatch(thunkExample)

// const addThunkTask = (text) => {
//     return (dispatch, getState) => {
//         const stateBefore = getState();
//         console.log('prev state => ',stateBefore);

//         setTimeout(() => {
//             dispatch(addTask({text}))
//         }, 5000);

//         console.log('current state =>', getState());
//     }
// }

// store.dispatch(addThunkTask('new task'))

export default store