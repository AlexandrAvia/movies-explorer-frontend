import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children, ...props }) => {
  return (
    <Route {...props}>{loggedIn ? children : <Navigate to="/sign-up" />}</Route>
  );
};

export default ProtectedRoute;
