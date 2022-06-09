import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---START--- DATA FROM REDUX
  const userAuth = useSelector((state) => state.userAuthReducer.userAuth);

  // ---END--- DATA FROM REDUX

  if (userAuth == null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RequireAuth;
