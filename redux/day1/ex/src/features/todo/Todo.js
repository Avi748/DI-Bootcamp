import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // console.log(todos);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
      dispatch(addTodo(text));
      setText("");
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />{" "}
      <button onClick={handleAddTodo}> Add Todo </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}>
          <span>{todo.text}</span>{" "}
          <button onClick={() => handleToggleTodo(todo.id)}>{" "}
          {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
            </button>{" "}
            <button onClick={() => handleRemoveTodo(todo.id)}> Delete </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;