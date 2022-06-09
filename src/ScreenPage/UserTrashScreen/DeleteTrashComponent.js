import React from "react";
import { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { t } from "i18next";
import { openDialogDeleteTrash } from "../../redux/actions/userTrashAction";

function DeleteTrashComponent() {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const selectRestore = useSelector(
    (state) => state.userTrashReducer.selectRestore
  );
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const clickButton = useCallback(
    () => dispatch(openDialogDeleteTrash()),
    [dispatch]
  );
  // --- END --- funtion handle in component

  if (selectRestore.length > 0) {
    return (
      <>
        {console.log("DeleteTrashComponent Render")}
        <Box width={16} />
        <Button variant="contained" onClick={clickButton}>
          {t("delete")}
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

export default memo(DeleteTrashComponent);
