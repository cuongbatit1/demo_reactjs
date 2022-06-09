import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ListButtonComponent from "./ListButtonComponent";
import ListDataComponent from "./ListDataComponent";
import AddUserModalComponent from "./AddUserModalComponent";
import homeMobxViewModel from "../../mobxviewmodel/homeMobxViewModel";
import { openDialog } from "../../redux/actions/dialogAction";
import { useTranslation, withTranslation, Trans } from "react-i18next";
const darkTheme = createTheme({
  palette: {
    bgHeaderTable: "red",
  },
});
const TimerView = observer(({ homeViewModel }) => (
  <Typography variant="h5" component="div" mt={2} ml={2}>
    {homeViewModel.open ? "List User" : "sadsad"}
  </Typography>
));

function TimerViewText() {
  const { t, i18n } = useTranslation();
  const showdialog = useSelector((state) => state.isOpen);
  return (
    <>
      {console.log("TimerViewText Render: ", showdialog)}
      <Typography variant="h5" component="div" mt={2} ml={2}>
        {t("welcome")}
        {/* {showdialog ? {t("welcome")} : "showdialog"} */}
      </Typography>
    </>
  );
}

function ListUserScreen() {
  const homeViewModel = new homeMobxViewModel();
  const dispatch = useDispatch();

  return (
    <>
      {console.log("ListUserScreen Render")}
      <ThemeProvider theme={darkTheme}>
        <AddUserModalComponent homeViewModel={homeViewModel} />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  dispatch(openDialog());
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <TimerView homeViewModel={homeViewModel} />
        <TimerViewText />
        {/* <Typography variant="h5" component="div" mt={2} ml={2}>
          {homeViewModel.open ? "List User" : "sadsad"}
        </Typography> */}
        <Typography variant="subtitle1" component="div" mt={0} ml={2}>
          With role and status
        </Typography>
        <ListButtonComponent homeViewModel={homeViewModel} />
        <ListDataComponent />
      </ThemeProvider>
    </>
  );
}

export default ListUserScreen;
