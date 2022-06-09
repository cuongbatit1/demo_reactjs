import React from "react";
import PropTypes from "prop-types";
import { memo, useCallback } from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
function CardSystemComponent(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { role } = props;
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
            {t("system_info")}
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
              {t("role")}
            </Typography>
            <Typography
              textAlign="right"
              sx={{ fontSize: 14, flexGrow: 1 }}
              variant="h5"
              component="div"
              gutterBottom
            >
              {role}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
CardSystemComponent.propTypes = {
  role: PropTypes.string.isRequired,
};
export default memo(CardSystemComponent);
