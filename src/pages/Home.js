import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutInitiate } from "../redux/actions";

function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const { user } = useSelector((state) => ({ ...state.user }));

  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <div>
      <h1 className="text-3xl underline">Hello {user} </h1>
     <Link to="/login">
      <button onClick={handleAuth}>LOGOUT</button>
     
     </Link>
    </div>
  );
}

export default Home;
