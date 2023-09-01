import React, { useEffect } from "react";

export const ThemeContext = React.createContext(null);


export const useTheme = () => {
  const [theme, setTheme] = React.useState("dark");


useEffect(()=>{
const currentTheme = window.localStorage.getItem('My_Theme');
 if ( currentTheme !== "dark" ) setTheme(currentTheme);
},[])


useEffect(() => {
  window.localStorage.setItem('My_Theme', theme)
}, [theme]);

  function toggleTheme() {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }

  return {theme, toggleTheme}

};
