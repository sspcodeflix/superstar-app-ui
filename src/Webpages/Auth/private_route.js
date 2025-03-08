import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute(props) {
    // const navigate = useNavigate()
  return (
    <>
      {localStorage.getItem("accesToken") ? (
        props.element
      ) : (
        // <Navigate to={"/login"} />
        window.location = "/login"
      )}
    </>
  );
}

export default PrivateRoute;
