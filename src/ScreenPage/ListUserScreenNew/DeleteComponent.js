import React from "react";
import { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { openDialogConfirmDelete } from "../../redux/actions/userListAction";
function DeleteComponent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const selectDelete = useSelector((state) => state.userReducer.selectDelete);
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const clickButton = useCallback(
    () => dispatch(openDialogConfirmDelete()),
    [dispatch]
  );
  // --- END --- funtion handle in component

  if (selectDelete.length > 0) {
    return (
      <>
        {console.log("DeleteComponent Render")}
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

export default memo(DeleteComponent);
