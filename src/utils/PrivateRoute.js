import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ access, children }) {
  let location = useLocation();

  if (!!access) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }
  return children;
}

export default RequireAuth;
