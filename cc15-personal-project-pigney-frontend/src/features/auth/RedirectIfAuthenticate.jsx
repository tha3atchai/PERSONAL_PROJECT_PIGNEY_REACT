import React from "react";
import { Navigate } from "react-router-dom";
import localStorageService from "../../utils/local-storage";
import { useSelector } from "react-redux";

function RedirectIfAuthenticate({ children }) {
  const { dataUser } = useSelector(state => state.auth);

  if (localStorageService.getToken() && dataUser) {
    return (
      <>
        <Navigate to={`/profile/${dataUser.id}`} />
      </>
    );
  }

  return children;
}

export default RedirectIfAuthenticate;
