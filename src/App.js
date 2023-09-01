import React,{useContext} from "react";
import Dashboard from "./components/Dashboard";
import Sidenav from "./components/Sidenav";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./style.scss";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import Trading from "./components/Trading";
import Navbar from "./components/Navbar";
import Wallet from "./components/Wallet";
import Academy from "./components/Academy";
import Watchlist from "./components/Watchlist";
import Register from "./pages/Register"
import Login from "./pages/Login"
import DarkMode from "./DarkMode/DarkMode";

import { ThemeContext, useTheme } from "./hooks/useTheme";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {theme, toggleTheme} = useTheme();
  const { currentUser } = useContext(AuthContext);

  const currentPath = window.location.pathname;

  const shouldRenderSidenav = currentPath !== '/login' && currentPath !== '/register';
  const shouldRenderSidenavHome = currentPath == '/' ;

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    } 
    return children
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="body">
          
          
            <div className="side">
              {shouldRenderSidenav && <Sidenav />}
            </div>
  
            <div className='main'>
          <div className="dashboard">
          
            <Navbar />
            <Routes>
              <Route path="/" element={
               <ProtectedRoute>
              <Dashboard />
              </ProtectedRoute>
              } />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="register" element={<Register/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="trading" element={<Trading />} />
              <Route path="watchlist" element={<Watchlist />} />
              <Route path="academy" element={<Academy />} />
              <Route path="profile" element={<Profile />} />
              <Route path="wallet" element={<Wallet />} />
            </Routes>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
