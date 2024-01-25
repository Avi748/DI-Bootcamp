import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import Button from "./components/Button";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext); 

  return (
    <div className={`App ${theme}`}>
      <Button/>
      <CharacterCounter/>
      <TodoList/>
    </div>
  );
}

export default App;
