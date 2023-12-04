import React from "react";
import { Navigate } from "react-router-dom";
import localStorageService from "../../utils/local-storage";

function Authenticated({ children }) {
  if (!localStorageService.getToken()) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Authenticated;
