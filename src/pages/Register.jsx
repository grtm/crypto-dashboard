import React, { useEffect } from "react";
import "../style.scss";
import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth,provider } from "../firebase";
import { db } from "../firebase";
export default function Register() {
  const [err, setErr] = useState(false);
  const [value, setValue] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log('displayName:', displayName);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
       await updateProfile(res.user, {
        displayName,displayName
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
      });
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  const handleGoogle = () => {
     signInWithPopup(auth,provider).then((data)=>{
         setValue(data.user.email)
         localStorage.setItem("email",data.user.email)
         navigate("/");
     })
  }

  useEffect(() =>{
    setValue(localStorage.getItem('email'))
  },[])

  return (
    <div>
      <div className="form-container">
        <div className="form-wrapper">
          <div className="Logo">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 34C26.3889 34 34 26.3888 34 17C34 7.61117 26.3889 0 17 0C7.61115 0 0 7.61117 0 17C0 26.3888 7.61115 34 17 34ZM22.3034 7.91932C22.5616 7.00235 21.6717 6.46011 20.859 7.03911L9.51416 15.1211C8.63279 15.749 8.77143 17 9.72241 17H12.7098V16.9769H18.5322L13.788 18.6508L11.6966 26.0807C11.4385 26.9977 12.3283 27.5399 13.141 26.9609L24.4859 18.8789C25.3673 18.251 25.2285 17 24.2776 17H19.7473L22.3034 7.91932Z"
                fill="#77ED91"
              />
            </svg>
            <span className="Large">ooPsum</span>
          </div>
          <span className="small">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="signinbtn">Sign up</button>
            <button onClick={handleGoogle} className="googlebtn">
              <img src={'data:image/png;base64,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'} alt="" className="google"/>
              Sign in with Google
              </button>
            {err && (
              <span style={{ color: "white" }}>Something went wrong</span>
            )}
          </form>
          <p>
            You have an account{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
