import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginInitiate } from "../redux/actions";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { currentUser } = useSelector((state) => state.user);

  const { email, password } = state;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const handleGoogleSignIn = () => {};

  const handleFBSignIn = () => {};
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1> Sign in</h1>
          <div>
            <button type="button" onClick={handleGoogleSignIn}>
              {" "}
            </button>
            <button type="button" onClick={handleFBSignIn}>
              <span>Sign in with Facebook</span>{" "}
            </button>
          </div>
          <p> OR </p>
          <input
            type="email"
            id="inputEmail"
            placeholder="Email address"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="inputPassword"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />

          <button type="submit">Sign in</button>
          <hr />
          <p>Don't have an account!</p>
          <Link to="/register">
            <button type="button" id="btn-signup">
              Sign up New Account
            </button>
          </Link>
        </form>

        <br />
      </div>
    </div>
  );
};

export default Login;
