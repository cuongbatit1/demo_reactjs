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
import { useTranslation } from "react-i18next";
function CardPersonalComponent(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { first_name, last_name } = props;
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
      <Card variant="outlined" sx={{ flexGrow: 0.25 }}>
        <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography textAlign="left" variant="h5" component="div">
            {t("personal_info")}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography
              sx={{ fontSize: 14 }}
              variant="h5"
              component="div"
              gutterBottom
            >
              {t("first_name")}
            </Typography>
            <Typography
              textAlign="right"
              sx={{ fontSize: 14, flexGrow: 1 }}
              variant="h5"
              component="div"
              gutterBottom
            >
              {first_name}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography
              sx={{ fontSize: 14 }}
              variant="h5"
              component="div"
              gutterBottom
            >
              {t("last_name")}
            </Typography>
            <Typography
              textAlign="right"
              sx={{ fontSize: 14, flexGrow: 1 }}
              variant="h5"
              component="div"
              gutterBottom
            >
              {last_name}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
CardPersonalComponent.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
};
export default memo(CardPersonalComponent);
