import React, { useEffect } from "react";

export const ThemeContext = React.createContext(null);


export const useTheme = () => {
  const [theme, setTheme] = React.useState("dark");
 localStorage.getItem('theme');


useEffect(() => {
localStorage.setItem('theme', 'toggleTheme')
}, [theme]);

  function toggleTheme() {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }

  return {theme, toggleTheme}

};
