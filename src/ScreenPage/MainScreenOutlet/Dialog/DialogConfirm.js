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
  clearAllLocalStorage,
  closeDialogConfirmHeader,
} from "../../../redux/actions/headerAction";

const ButtonYes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDelete = useCallback(
    () => dispatch(clearAllLocalStorage(navigate)),
    [dispatch, navigate]
  );
  return (
    <>
      {console.log("ButtonYes with useNavigate Render")}
      <Button onClick={onDelete} autoFocus>
        Yes
      </Button>
    </>
  );
};

const DialogConfirm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // ---START--- DATA FROM REDUX
  const isShowDialogConfirm = useSelector(
    (state) => state.headerMainReducer.isShowDialogConfirm
  );

  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const onClose = useCallback(
    () => dispatch(closeDialogConfirmHeader()),
    [dispatch]
  );

  // --- END --- funtion handle in component
  return (
    <>
      {console.log("DialogConfirm Render")}
      <Dialog
        open={isShowDialogConfirm}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Notifications</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want delete all data in localStorage ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonYes />
          <Button onClick={onClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(DialogConfirm);
