import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { USER_AUTH } from "../../constants/KeyLocalStorage";
import { loadDataUserAuth } from "../../redux/actions/requireAuthLoginAction";

function RequireAuthLogin({ children }) {
  const dispatch = useDispatch();
  const userAuth = JSON.parse(localStorage.getItem(USER_AUTH));
  console.log("RequireAuthLogin", userAuth);
  if (userAuth) {
    useEffect(() => {
      console.log("useEffect when app start and RequireAuthLogin a turn after render");
      dispatch(loadDataUserAuth(userAuth));
    }, []);

    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/main" replace />;
  }

  return children;
}

export default RequireAuthLogin;
