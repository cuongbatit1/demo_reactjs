import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useEffect, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { openDialog, closeDialog } from "../redux/actions/dialogAction";
function HomeScreen() {
  const showdialog = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("HomeScreen load");
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log("clear HomeScreen");
      // clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {console.log("HomeScreen Render")}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/orders">Expenses</Link>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={() => {
              console.log("click HomePage ");
              if (showdialog) {
                dispatch(closeDialog());
              } else {
                dispatch(openDialog());
              }
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
        </header>
      </div>
    </>
  );
}

export default HomeScreen;
