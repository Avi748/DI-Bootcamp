import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from "./reducers";

export const addToDo = (txt) => {
    return{
        type: ADD_TODO,
        text: txt
    }
}

export const removeToDO = (txt) => {
    return{
        type: REMOVE_TODO,
        text: txt
    }
}

export const toDoComplete = (txt) => {
    return{
        type: COMPLETE_TODO,
        text: txt
    }
}