import React from "react";

export const ThemeContext = React.createContext(null);

export const useTheme = () => {
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  function toggleTheme() {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
};