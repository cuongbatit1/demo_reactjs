import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { closeDialogMessageLogin } from "../../redux/actions/loginAction";

const DialogMessage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // ---START--- DATA FROM REDUX
  const isShowDialogMessage = useSelector(
    (state) => state.dialogMessageReducer.isShowDialogMessage
  );
  const messageDialog = useSelector(
    (state) => state.dialogMessageReducer.messageDialog
  );

  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const onClose = useCallback(
    () => dispatch(closeDialogMessageLogin()),
    [dispatch]
  );

  // --- END --- funtion handle in component
  return (
    <>
      {console.log("DialogMessage Render")}
      <Dialog
        open={isShowDialogMessage}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Notifications</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {messageDialog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(DialogMessage);
