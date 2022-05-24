import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions";

function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <div>
      <h1 className="text-3xl underline">Hello</h1>
      <button onClick={handleAuth}>LOGOUT</button>
    </div>
  );
}

export default Home;
