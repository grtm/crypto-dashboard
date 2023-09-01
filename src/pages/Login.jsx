import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
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
        <span className="small">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="signinbtn">Log in</button>
          {err && <span style={{ color: "white" }}>Something went wrong</span>}
        </form>
        <p>
          You don't have an account{" "}
          <Link to="/register" className="link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
