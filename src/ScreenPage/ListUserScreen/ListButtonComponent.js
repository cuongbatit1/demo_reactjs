import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Box, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { loadDataState } from "../../redux/actions/dialogAction";

function ListButtonComponent(props) {
  const { homeViewModel } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="stretch"
      spacing={0}
    >
      <IconButton
        size="medium"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        onClick={() => {
          console.log("click search");
          dispatch(loadDataState());
        }}
      >
        <SearchIcon />
      </IconButton>

      <IconButton
        size="medium"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        onClick={() => {
          console.log("sdassasdsad");
          navigate("/home");
        }}
      >
        <SettingsOutlinedIcon />
      </IconButton>

      <Button variant="contained" onClick={homeViewModel.handleOpen}>
        Add new
      </Button>
    </Stack>
  );
}

export default ListButtonComponent;
