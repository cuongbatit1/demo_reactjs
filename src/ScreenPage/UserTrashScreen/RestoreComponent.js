import React from "react";
import { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { t } from "i18next";
import { restoreUserTrash } from "../../redux/actions/userTrashAction";
function RestoreComponent() {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const selectRestore = useSelector(
    (state) => state.userTrashReducer.selectRestore
  );
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const clickRestoreUserTrash = useCallback(
    () => dispatch(restoreUserTrash()),
    [dispatch]
  );
  // --- END --- funtion handle in component

  if (selectRestore.length > 0) {
    return (
      <>
        {console.log("RestoreComponent Render")}
        <Box width={16} />
        <Button variant="contained" onClick={clickRestoreUserTrash}>
          {t("restore")}
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Box />
      </>
    );
  }
}

export default memo(RestoreComponent);
