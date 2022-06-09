import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import UserListComponent from "./UserListComponent";
import Button from "@mui/material/Button";
import { loadDataFirstUserList } from "./../../redux/actions/userListAction";
import { openDialogAction } from "./../../redux/actions/addUserModalAction";

import DeleteComponent from "./DeleteComponent";
import AddUserModal from "./Modal/AddUserModal";
import LoadingModal from "./Modal/LoadingModal";
import LoadingModalUserList from "./Dialog/LoadingModalUserList";
import DialogConfirmDelete from "./Dialog/DialogConfirmDelete";
function ListUserScreenNew() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect when app start and Load a turn after render");
    dispatch(loadDataFirstUserList());
  }, []);

  useEffect(() => {
    return () => {
      console.log("useEffect unmount 1");
    };
  }, []);
  return (
    <>
      {console.log("ListUserScreenNew Render")}
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
          {t("user_list")}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(openDialogAction());
          }}
        >
          {t("add_user")}
        </Button>

        <DeleteComponent />
      </Grid>

      <UserListComponent />
      <AddUserModal />
      <LoadingModal />
      <LoadingModalUserList />
      <DialogConfirmDelete />
    </>
  );
}

export default ListUserScreenNew;
