import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginInitiate } from "../redux/actions";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaLock,
  FaRegEnvelope,
} from "react-icons/fa";

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
    <>
           <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
              <div className="text-left font-bold">
                <span className="text-indigo-500">we</span>
                Post
              </div>
              <div className="py-10">
                <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                  Sign in to your Account
                </h2>

                <div className="border-2 w-10 border-purple-500 inline-block mb-2"></div>
                <div className="flex justify-center my-2">
                  <button
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                    type="button"
                    onClick={handleFBSignIn}
                  >
                    <FaFacebookF className="text-sm text-purple-500" />
                  </button>
                  <button className="border-2 border-gray-200 rounded-full p-3 mx-1">
                    <FaLinkedin className="text-sm text-purple-500" />
                  </button>
                  <button
                    className="border-2 border-gray-200 rounded-full p-3 mx-1"
                    type="button"
                    onClick={handleGoogleSignIn}
                  >
                    <FaGoogle className="text-sm text-purple-500" />
                  </button>
                </div>
                <p className="text-gray-400 mb-3"> or use your email account</p>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                      <FaRegEnvelope className="text-gray-400 m-2" />
                      <input
                        type="email"
                        id="inputEmail"
                        placeholder="Email address"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-sm flex-1"
                        required
                      />
                    </div>
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                      <FaLock className="text-gray-400 m-2" />
                      <input
                        type="password"
                        id="inputPassword"
                        placeholder="Password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        className="bg-gray-100 outline-none text-sm flex-1"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="border-2 border-purple-500 text-purple-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-purple-500 hover:text-white"
                    >
                      {" "}
                      Log In{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* section sign up */}
            <div className="w-2/5 bg-gradient-to-b from-indigo-500 via-purple-600 to-pink-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Hello, welcome!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">
                {" "}
                Feel free to join us and start journey with us.
              </p>
              <Link to="/register">
                <button
                  type="submit"
                  className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-purple-500"
                >
                  {" "}
                  Sign Up{" "}
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
