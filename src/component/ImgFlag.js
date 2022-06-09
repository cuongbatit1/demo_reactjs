import MenuItem from "@mui/material/MenuItem";
import { memo } from "react";
import PropTypes from "prop-types";

const ImgFlag = (props) => {
  const { srcImg } = props;
  return (
    <>
      {console.log("ImgFlag Render ", srcImg)}
      <img style={{ width: 30, height: 30 }} src={srcImg} alt="import" />
    </>
  );
};

ImgFlag.propTypes = {
  srcImg: PropTypes.string.isRequired,
};
export default memo(ImgFlag);
