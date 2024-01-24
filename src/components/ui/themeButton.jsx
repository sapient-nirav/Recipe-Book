// ToggleButton.js
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ThemeBtn = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{isDarkTheme ? "Light" : "Dark"}</button>
  );
};

export default ThemeBtn;
