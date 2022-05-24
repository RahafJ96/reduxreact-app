import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutInitiate } from "../redux/actions";


const Header = ()=>{
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();
    const { user } = useSelector((state) => ({ ...state.user }));
    const dispatch = useDispatch();

    const handleAuth = () => {
        if (user) {
          dispatch(logOutInitiate());
        }
      };

    return(
<>
<div>
      <Link to="/">
        <p >Contact App</p>
      </Link>
      <div>
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("AddContact")}
          >
            Add Contact
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
        {user ? (
          <p onClick={handleAuth} style={{ cursor: "pointer" }}>
            Sign Out
          </p>
        ) : (
          <Link to="/login">
            <p
              className={`${activeTab === "Signin" ? "active" : ""}`}
              onClick={() => setActiveTab("Signin")}
            >
              Sign In
            </p>
          </Link>
        )}
      </div>
    </div>
</>
    )
}

export default Header;