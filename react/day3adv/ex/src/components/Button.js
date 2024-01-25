import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
        <button onClick={() => toggleTheme()}>{theme}</button>
    </div>
  );
};

export default Button;