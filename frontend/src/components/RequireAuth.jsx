import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem("user");
  const auth = useAuth();
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
