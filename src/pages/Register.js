import React, { useState, useEffect } from "react";
import { registerInitiate } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();
  const { email, password, displayName, passwordConfirm } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };

  return (
    <div>
      <div id="register-form">
        <form onSubmit={handleSubmit}>
          <h1> Sign up</h1>

          <input
            type="text"
            id="user-name"
            placeholder="Full name"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="user-email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="user-pass"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="user-repeatpass"
            placeholder="Repeat Password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
          <Link to="/login">Back</Link>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Register;
