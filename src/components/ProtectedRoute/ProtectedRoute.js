import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loggedIn, loading }) => {
  if (loading) {
    return 'Loading...';
  }
  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
