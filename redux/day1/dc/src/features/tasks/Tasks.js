import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editTask} from "./tasksSlice";

const Tasks = () => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('all');

    // console.log(tasks);
  
    const handleInputChange = (e) => {
      setText(e.target.value);
    };

    const handleDateInputChange = (date) => {
      const inputDate = new Date(date);
      let newDate = inputDate.toLocaleString('en-us', {weekday:'long'});
      setDate(newDate)
    };

    const handleAddTask = () => {
          dispatch(addTask(text, date));
          setText("");
          setDate("");
    };
  
    const handleDeleteTask = (id) => {
      dispatch(deleteTask(id));
    };

    const fillterTasks = tasks.filter(task => {
      if(filter === 'all') return task;
      if(filter === 'Sunday') return task.day === 'Sunday'
      if(filter === 'Monday') return task.day === 'Monday'
      if(filter === 'Tuesday') return task.day === 'Tuesday'
      if(filter === 'Wednesday') return task.day === 'Wednesday'
      if(filter === 'Thursday') return task.day === 'Thursday'
      if(filter === 'Friday') return task.day === 'Friday'
      if(filter === 'Saturday') return task.day === 'Saturday'
  })
  
    return (
      <div>
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("Sunday")}>Sunday</button>
            <button onClick={() => setFilter("Monday")}>Monday</button>
            <button onClick={() => setFilter("Tuesday")}>Tuesday</button>
            <button onClick={() => setFilter("Wednesday")}>Wednesday</button>
            <button onClick={() => setFilter("Thursday")}>Thursday</button>
            <button onClick={() => setFilter("Friday")}>Friday</button>
            <button onClick={() => setFilter("Saturday")}>Saturday</button>
        </div>
        Task:<input type="text" value={text} onChange={handleInputChange} /><br/>
        Day:<input type="date" onChange={(e) => handleDateInputChange(e.target.value)}/><br/>
        <button onClick={handleAddTask}> Add Task </button>
        <ul>
          {fillterTasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>{" "}
              <span>{task.day}</span>{" "}
              <button onClick={() => handleDeleteTask(task.id)}> Delete </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Tasks