import MenuItem from "@mui/material/MenuItem";
import { memo } from "react";
import PropTypes from "prop-types";
import ImgFlag from "./ImgFlag";

const MenuItemFlag = (props) => {
  const { srcImg, clickChangeFlag } = props;
  return (
    <>
      {console.log("MenuItemFlag Render ", srcImg)}
      <MenuItem onClick={clickChangeFlag}>
        <ImgFlag srcImg={srcImg} />
      </MenuItem>
    </>
  );
};

MenuItemFlag.propTypes = {
  srcImg: PropTypes.string.isRequired,
  clickChangeFlag: PropTypes.func.isRequired,
};
export default memo(MenuItemFlag);
