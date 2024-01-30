import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState : [],
  reducers: {    
    addTask : {
      reducer(state, action){
        const newTask = {id:Date.now(), text: action.payload.a, day: action.payload.b, edit:false}
        state.push(newTask)
      },
      prepare(text, day) {
          return {payload : {a : text, b : day}}
      }
    },
    
    deleteTask: (state, action) => {
      const index = state.filter((task) => task.id === action.payload)
      if(index !== -1){
        state.splice(index, 1);
      }
    },

    editTask: (state, action) => {
      state.filter((task) => task.id === action.payload? task.edit : true)
    }
  }
})

export const {addTask, deleteTask, editTask} = tasksSlice.actions;
export default tasksSlice.reducer; 