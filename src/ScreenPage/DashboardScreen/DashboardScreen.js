import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
function DashboardScreen() {
  const { t } = useTranslation();
  // ---START--- DATA FROM REDUX

  const userAuth = useSelector((state) => state.userAuthReducer.userAuth);
  // ---END--- DATA FROM REDUX
  return (
    <>
      <Typography variant="h3" component="div" mt={0} ml={2}>
        {t("dashboard_screen")}
      </Typography>
      <Typography variant="h3" component="div" mt={0} ml={2}>
        {t("hello")} : {userAuth?.first_name} {userAuth?.last_name}
      </Typography>
    </>
  );
}

export default DashboardScreen;
