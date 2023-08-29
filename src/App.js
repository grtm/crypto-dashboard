import Register from "./pages/Register"
import Login from "./pages/Login"
import {useContext} from 'react'
import Dashboard from "./pages/Dashboard"
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import {AuthContext} from "./context/AuthContext"
import './App.css';

function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) => {
     if(!currentUser){
        return <Navigate to="/login"/>
     }

     return children
  }

  return (
    <div className="App">
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
  );
}

export default App;
