import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  loadDataFirst,
  removeUserDetail,
} from "../../redux/actions/userDetailAction";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import CardImageComponent from "./CardImageComponent";
import CardPersonalComponent from "./CardPersonalComponent";
import CardSystemComponent from "./CardSystemComponent";

function DetailUserScreen() {
  const location = useLocation();
  console.log("location", location);
  const pathname = location.pathname;
  const item = location.state;
  console.log("PDDDD", item.id);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // ---START--- DATA FROM REDUX
  const userDetail = useSelector((state) => state.userDetailReducer.userDetail);

  // ---END--- DATA FROM REDUX

  useEffect(() => {
    console.log("useEffect when app start and Load a turn after render");
    dispatch(loadDataFirst(item));
  }, []);

  useEffect(() => {
    return () => {
      console.log("useEffect unmount 1");
      dispatch(removeUserDetail());
    };
  }, []);
  return (
    <>
      {console.log("DetailUserScreen RENDER ")}
      <Typography variant="h4" component="div" mt={0} ml={2}>
        {t("detail_of")} {userDetail?.first_name} {userDetail?.last_name}
      </Typography>
      <Stack direction="row" spacing={1} ml={1} mr={1}>
        <CardImageComponent
          email={`${userDetail?.email}`}
          fullname={`${userDetail?.first_name} ${userDetail?.last_name}`}
        />
        <CardPersonalComponent
          first_name={`${userDetail?.first_name}`}
          last_name={`${userDetail?.last_name}`}
        />
        <CardSystemComponent role={`${userDetail?.role}`} />
      </Stack>
    </>
  );
}

export default DetailUserScreen;
