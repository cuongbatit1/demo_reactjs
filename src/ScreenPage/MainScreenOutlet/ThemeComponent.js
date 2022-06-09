import React from "react";
import { memo, useCallback } from "react";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { handleChangeTheme } from "../../redux/actions/themeAction";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setDarkMode,
} from "../../context/MaterialUIControllerProvider";

function ThemeComponent(props) {
  const dispatch = useDispatch();

  // ---START--- DATA FROM CONTEXT
  const [controller, dispatchContext] = useMaterialUIController();
  const { darkMode } = controller;
  // ---END--- DATA FROM CONTEXT

  // ---START--- DATA FROM REDUX
  // const darkMode = useSelector((state) => state.themeReduce.themeDark);
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const clickChangeTheme = () => setDarkMode(dispatchContext, !darkMode);

  // const clickChangeTheme = useCallback(
  //   () => dispatch(handleChangeTheme()),
  //   [dispatch]
  // );
  // --- END --- funtion handle in component
  return (
    <>
      {console.log("ThemeComponent Render")}
      <Switch
        checked={!darkMode}
        onChange={clickChangeTheme}
        color="default"
        inputProps={{
          "aria-label": "Switch change theme",
        }}
      />
    </>
  );
}

export default memo(ThemeComponent);
