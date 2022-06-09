import React from "react";
import { memo, useCallback, useMemo } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ClearIcon from "@mui/icons-material/Clear";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AppBarComponent from "./../../component/AppBarComponent";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  actionCloseMenu,
  actionOpenMenu,
  handleChangeDrawer,
  handleLogout,
  handleProfile,
  openDialogConfirmHeader,
} from "../../redux/actions/headerAction";

import LangComponent from "./LangComponent";
import ThemeComponent from "./ThemeComponent";

const MenuProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickProfile = useCallback(
    () => dispatch(handleProfile(navigate)),
    [dispatch, navigate]
  );
  return (
    <>
      {console.log("MenuProfile with useNavigate Render")}
      <MenuItem onClick={clickProfile}>{t("profile")}</MenuItem>
    </>
  );
};

const MenuLogout = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickLogout = useCallback(
    () => dispatch(handleLogout(navigate)),
    [dispatch, navigate]
  );
  return (
    <>
      {console.log("MenuLogout with useNavigate Render")}
      <MenuItem onClick={clickLogout}>{t("log_out")}</MenuItem>
    </>
  );
};

function HeaderComponent() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  // ---START--- DATA FROM REDUX
  const isAnchorEl = useSelector((state) => state.headerMainReducer.isAnchorEl);
  // ---END--- DATA FROM REDUX
  // --- START --- funtion handle in component useCallback
  const handleClose = useCallback(
    () => dispatch(actionCloseMenu()),
    [dispatch]
  );

  const handleMenu = useCallback(
    (event) => dispatch(actionOpenMenu(event.currentTarget)),
    [dispatch]
  );

  const clickChangeDrawer = useCallback(
    () => dispatch(handleChangeDrawer()),
    [dispatch]
  );

  const clickShowDialogConfirm = useCallback(
    () => dispatch(openDialogConfirmHeader()),
    [dispatch]
  );
  // --- END --- funtion handle in component
  return (
    <>
      {console.log("HeaderComponent Render")}
      <AppBarComponent position="fixed" open={false}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={clickChangeDrawer}
            edge="start"
            sx={
              {
                // ...(open && { display: "none" }),
              }
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {t("title")}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={clickShowDialogConfirm}
            color="inherit"
          >
            <ClearIcon />
          </IconButton>
          <ThemeComponent />
          <LangComponent />
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={isAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(isAnchorEl)}
            onClose={handleClose}
          >
            <MenuProfile />
            <MenuLogout />
          </Menu>
        </Toolbar>
      </AppBarComponent>
    </>
  );
}

export default memo(HeaderComponent);
