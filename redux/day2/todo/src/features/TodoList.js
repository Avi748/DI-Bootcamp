import {useSelector, useDispatch} from 'react-redux'
import { addTask, toggleTask, removeTask ,addThunkTask, addAsyncThunkTask} from './todoSlice';
import { useState } from 'react';

const TodoList = (props) => {
    const [text, setText] = useState()
    const tasks = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    // console.log(tasks);
    return (
        <div>
            <h2>TodoList</h2>
            <div>
                <input type="text" placeholder="Add task" onChange={(e) => setText(e.target.value)}/>
                <button onClick={() => dispatch(addTask({text}))}>Add Task</button>
                <button onClick={() => dispatch(addThunkTask(text))}>Add Thunk Task</button>
                <button onClick={() => dispatch(addAsyncThunkTask(text))}>Add Async Thunk Task</button>
            </div>
            <div>
                {
                    tasks.map(task => {
                        return(
                            <div key={task.id}>
                                <input type='checkbox' checked={task.completed} onChange={() => dispatch(toggleTask(task.id))}/>
                                <span style={{textDecoration: task.completed? 'line-through' : ""}}>{task.text}</span>
                                <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TodoList