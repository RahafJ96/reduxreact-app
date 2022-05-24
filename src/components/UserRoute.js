import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { Route } from "react-router-dom";


const UserRoute = (children, ...rest) => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default UserRoute;
