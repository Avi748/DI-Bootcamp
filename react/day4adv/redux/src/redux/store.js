import {configureStore}  from '@reduxjs/toolkit'
import {counterReducer} from './reducers'

export default configureStore({
    reducer: {
        new_counter : counterReducer
    }
})