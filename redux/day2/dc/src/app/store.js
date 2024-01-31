import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter : counterReducer // counter is the name from counterSlice
    }
})