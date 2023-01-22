import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link} from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const signIn = e=>{
        e.preventDefault();
        auth.
          createUserWithEmailAndPassword(email,pass)
          .then((auth)=>{
            console.log(auth);
          })
          .catch(error=>{
            alert(error.message)
          })  
    }
    const register = e=>{
        e.preventDefault();
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
          <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing in you agree to AMAZON CLONE'S Conditions of Use & Sale.
          Please see out Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
