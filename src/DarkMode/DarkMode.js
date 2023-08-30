import React, { useContext } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { ThemeContext } from "../hooks/useTheme";

const DarkMode = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)
    
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
