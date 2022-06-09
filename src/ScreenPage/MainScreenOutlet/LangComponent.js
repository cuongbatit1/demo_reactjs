import React from "react";
import { memo, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
// import flag_vietnam from "../../../assets/flag_vietnam.png";
// import flag_kingdom from "../../../assets/flag_kingdom.png";
import {
  actionCloseMenuLang,
  actionOpenMenuLang,
  handleChangeLangEN,
  handleChangeLangVI,
} from "../../redux/actions/headerAction";

import MenuItemFlag from "../../component/MenuItemFlag";
import ImgFlag from "../../component/ImgFlag";

const flag_vietnam = "/static/images/flag_vietnam.png";
const flag_kingdom = "/static/images/flag_kingdom.png";

function LangComponent(props) {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const isAnchorElLang = useSelector(
    (state) => state.headerMainReducer.isAnchorElLang
  );
  const lang = useSelector((state) => state.headerMainReducer.lang);
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback
  const handleCloseLang = useCallback(
    () => dispatch(actionCloseMenuLang()),
    [dispatch]
  );

  const handleMenuLang = useCallback(
    (event) => dispatch(actionOpenMenuLang(event.currentTarget)),
    [dispatch]
  );

  const clickChangeLangEN = useCallback(
    () => dispatch(handleChangeLangEN()),
    [dispatch]
  );

  const clickChangeLangVI = useCallback(
    () => dispatch(handleChangeLangVI()),
    [dispatch]
  );
  // --- END --- funtion handle in component
  return (
    <>
      {console.log("LangComponent Render")}
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuLang}
        color="inherit"
      >
        <ImgFlag srcImg={lang === "en" ? flag_kingdom : flag_vietnam} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={isAnchorElLang}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(isAnchorElLang)}
        onClose={handleCloseLang}
      >
        <MenuItemFlag
          srcImg={flag_kingdom}
          clickChangeFlag={clickChangeLangEN}
        />
        <MenuItemFlag
          srcImg={flag_vietnam}
          clickChangeFlag={clickChangeLangVI}
        />
      </Menu>
    </>
  );
}

export default memo(LangComponent);
