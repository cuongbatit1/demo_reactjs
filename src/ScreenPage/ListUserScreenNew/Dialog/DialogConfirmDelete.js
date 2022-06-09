import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  closeDialogConfirmDelete,
  deleteUser,
} from "../../../redux/actions/userListAction";

const DialogConfirmDelete = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  // ---START--- DATA FROM REDUX
  const isShowDialogConfirmDelete = useSelector(
    (state) => state.userReducer.isShowDialogConfirmDelete
  );

  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const onDelete = useCallback(() => {
    dispatch(closeDialogConfirmDelete());
    dispatch(deleteUser());
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(closeDialogConfirmDelete());
  }, [dispatch]);

  // --- END --- funtion handle in component
  return (
    <>
      {console.log("DialogConfirmDelete Render")}
      <Dialog
        open={isShowDialogConfirmDelete}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Notifications</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want delete list users had select ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDelete} autoFocus>
            Yes
          </Button>
          <Button onClick={onClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogConfirmDelete;
