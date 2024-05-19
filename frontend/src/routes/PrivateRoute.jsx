/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const location = useLocation();

  const accessToken = localStorage.getItem("u_token");

  return !accessToken ? (
    <Navigate to={"/login"} state={{ from: location }} />
  ) : (
    children
  );
};

export default AuthProtected;
