import React from 'react'
import "../style.scss"
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
export default function Register() {
  const [err,setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
 
    try{
    const res = createUserWithEmailAndPassword(auth, email, password);
    navigate("/")
    }catch(err){
      setErr(true)
    }
};
  return (
    <div>
        <div className='form-container'>
        <div className='form-wrapper'>
        <span className="Large">ooPsum</span>
        <span className="small">Register</span>
            <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Username"/>
               <input type="email" placeholder="Email"/>
               <input type="password" placeholder="Password"/>
               <button>Sign up</button>
               {err && <span>Something went wrong</span>}
            </form>
            <p>You have an account <Link to="/login" className="link">Login</Link></p>
        </div>
        
    </div>
    </div>
  )
}
