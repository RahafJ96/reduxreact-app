import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/actions";
import AddPost from "./pages/AddPost";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(dispatch(setUser(null)));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/addpost" element={<AddPost />} />
          <Route exact path="/addpost" element={<AddPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
