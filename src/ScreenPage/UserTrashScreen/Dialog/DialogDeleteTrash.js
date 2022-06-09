import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  closeDialogDeleteTrash,
  deleteUserTrash,
} from "../../../redux/actions/userTrashAction";
import { getIsLoadingMovie } from "../../../redux/selector/movieSelector";

const DialogDeleteTrash = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  // ---START--- DATA FROM REDUX
  const isShowDialogDeleteTrash = useSelector(getIsLoadingMovie);

  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const onDelete = useCallback(() => {
    dispatch(closeDialogDeleteTrash());
    dispatch(deleteUserTrash());
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(closeDialogDeleteTrash());
  }, [dispatch]);

  // --- END --- funtion handle in component
  return (
    <>
      {console.log("DialogDeleteTrash Render")}
      <Dialog
        open={isShowDialogDeleteTrash}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Notifications</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want delete list users had select in trash bin ?
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

export default DialogDeleteTrash;
