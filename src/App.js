import Register from "./pages/Register"
import Login from "./pages/Login"
import {useContext} from 'react'
import Dashboard from "./pages/Dashboard"
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import {AuthContext} from "./context/AuthContext"
import { ThemeContext, useTheme } from "./hooks/useTheme";
import './App.css';

function App() {
  const {theme, toggleTheme} = useTheme()
  localStorage.getItem( 'theme' , 'toggleTheme');

  const {currentUser} = useContext(AuthContext)
  const isAuthenticated = !!currentUser
  const ProtectedRoute = ({children}) => {
     if(!isAuthenticated){
        return <Navigate to="/login"/>
     }

     return children
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <BrowserRouter>
      <Routes>
        <Route path=""/>
        <Route index element = {<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />
        <Route path="login" element = {<Login />} />
        <Route path="register" element = {<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
