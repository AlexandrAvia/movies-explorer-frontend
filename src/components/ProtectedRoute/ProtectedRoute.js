import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Movies/Preloader/Preloader";

const ProtectedRoute = ({ children, loggedIn, loading }) => {
  if (loading) {
    return <Preloader />;
  }
  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
