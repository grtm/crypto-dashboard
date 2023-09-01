import React from "react";
import Dashboard from "./components/Dashboard";
import Sidenav from "./components/Sidenav";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Trading from "./components/Trading";
import Navbar from "./components/Navbar";
import Wallet from "./components/Wallet";
import Academy from "./components/Academy";
import Watchlist from "./components/Watchlist";
import DarkMode from "./DarkMode/DarkMode";
import { ThemeContext, useTheme } from "./hooks/useTheme";


function App() {
 
  const {theme, toggleTheme} = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="body">
          <div className="side">
            <Sidenav />
          </div>
          <div className="main">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="trading" element={<Trading />} />
              <Route path="watchlist" element={<Watchlist />} />
              <Route path="academy" element={<Academy />} />
              <Route path="profile" element={<Profile />} />
              <Route path="wallet" element={<Wallet />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
