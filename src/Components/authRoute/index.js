import React from "react";
import { session } from "../../utils";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  return !session.checkIfLogin() ? <Navigate to="search" /> : <Outlet />;
};

export default AuthRoute;
