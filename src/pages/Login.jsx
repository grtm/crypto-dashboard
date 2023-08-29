import React from 'react'
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
export default function Login() {
  const [err,setErr] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
 
    try{
     await signInWithEmailAndPassword(auth, email, password)
     navigate("/")
    }catch(err){
      setErr(true)
    }
};
  return (
    <div className='form-container'>
    <div className='form-wrapper'>
        <span className="Large">ooPsum</span>
        <span className="small">Login</span>
        <form onSubmit={handleSubmit}>
           <input type="email" placeholder="Email"/>
           <input type="password" placeholder="Password"/>
           <button>Log in</button>
           {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account <Link to="/register" className="link">Register</Link></p> 
    </div>
    </div>
  )
}
