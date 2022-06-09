import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation, withTranslation, Trans } from "react-i18next";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { addUser, deleteUser } from "../../redux/actions/userListAction";
import { useEffect, useState } from "react";
import { t } from "i18next";
import UserTrashComponent from "./UserTrashComponent";
import {
  loadDataStateUserTrash,
  restoreUserTrash,
} from "../../redux/actions/userTrashAction";
import LoadingTrashModal from "./Modal/LoadingTrashModal";
import RestoreComponent from "./RestoreComponent";
import DeleteTrashComponent from "./DeleteTrashComponent";
import DialogDeleteTrash from "./Dialog/DialogDeleteTrash";
function UserTrashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect when app start and Load a turn after render");
    dispatch(loadDataStateUserTrash());
  }, []);

  useEffect(() => {
    return () => {
      console.log("useEffect unmount 1");
    };
  }, []);
  return (
    <>
      {console.log("UserTrashComponent Render")}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        pb={2}
        pr={2}
      >
        <Typography
          flexGrow={1}
          variant="subtitle1"
          component="div"
          mt={0}
          ml={2}
        >
          {t("trash_bin")}
        </Typography>
        <DeleteTrashComponent />
        <Box width={16} />
        <RestoreComponent />
      </Grid>

      <UserTrashComponent />
      <LoadingTrashModal />
      <DialogDeleteTrash />
    </>
  );
}

export default UserTrashScreen;
