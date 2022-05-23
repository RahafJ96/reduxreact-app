import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const handleSubmit = () => {};
  const handleGoogleSignIn = () => {};
  const handleFBSignIn = () => {};
  const handleChange = () => {};
  return (
    <div>
      <h2>Login </h2>
      <div id="logreg-form">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="">Sign in</h1>
          <button type="button" onClick={handleGoogleSignIn}>
            Google
          </button>
          <button type="button" onClick={handleFBSignIn}>
            FB
          </button>

          <div>
            <input
              type="email"
              placeholder="email@gmail.com"
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
            <input
              type="password"
              placeholder="*****************"
              id="password"
              name="password"
              onChange={handleChange}
              value={password}
              required
            />
            <button type="submit">Login</button>
            <br />
          </div>
          <Link to="/register"> 
          <button type="submit" id="btn-signup">Sign up</button>
          
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
