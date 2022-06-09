import React from "react";
import PropTypes from "prop-types";
import { memo, useCallback } from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { green, pink } from "@mui/material/colors";
import { toInitials } from "../../utils/Utils";
function CardImageComponent(props) {
  const dispatch = useDispatch();
  const { email, fullname } = props;
  // ---START--- DATA FROM REDUX
  // const darkMode = useSelector((state) => state.themeReduce.themeDark);
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  // const clickChangeTheme = useCallback(
  //   () => dispatch(handleChangeTheme()),
  //   [dispatch]
  // );
  // --- END --- funtion handle in component
  return (
    <>
      {console.log("CardImageComponent Render")}
      <Card variant="outlined" sx={{ flexGrow: 0.5 }}>
        <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
          <Grid container justifyContent="center" sx={{ mb: 1 }}>
            <Avatar
              sx={{
                fontSize: 50,
                bgcolor: green[500],
                width: 128,
                height: 128,
              }}
            >
              {toInitials(fullname)}
            </Avatar>
          </Grid>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {fullname}
          </Typography>
          <Typography variant="h5" component="div">
            {email}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
CardImageComponent.propTypes = {
  email: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
};
export default memo(CardImageComponent);
