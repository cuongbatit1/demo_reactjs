import React from "react";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import HomeScreen from "./ScreenPage/HomeScreen";
import PageNotFound from "./ScreenPage/PageNotFound";
import ListUserScreen from "./ScreenPage/ListUserScreen/ListUserScreen";
import { useMaterialUIController } from "./context/MaterialUIControllerProvider";
import MainScreenRoute from "./ScreenPage/MainScreenRoute/MainScreenRoute";
import LoginScreen from "./ScreenPage/LoginScreen/LoginScreen";
import RequireAuth from "./ScreenPage/RequireAuth/RequireAuth";
import RequireAuthLogin from "./ScreenPage/RequireAuthLogin/RequireAuthLogin";
import AboutScreen from "./ScreenPage/AboutScreen/AboutScreen";
import MovieScreen from "./ScreenPage/MovieScreen/MovieScreen";


function LayoutOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  const dispatch = useDispatch();
  // ---START--- DATA FROM CONTEXT
  const [controller, dispatchContext] = useMaterialUIController();
  const { darkMode } = controller;
  // ---END--- DATA FROM CONTEXT

  // ---START--- DATA FROM REDUX
  // const darkMode = useSelector((state) => state.themeReduce.themeDark);
  // ---END--- DATA FROM REDUX

  // ---START---  useEffect
  // useEffect(() => {
  //   console.log("counter mounted or updated");
  // });
  console.log("dsfdsfsdfdsf");

  // useEffect(() => {
  //   return () => {
  //     console.log("useEffect counter unmounted");
  //   };
  // }, []);
  // ---END---  useEffect
  return (
    <>
      {console.log("App Root Render")}
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />

        <Routes>
          <Route path="/" element={<LayoutOutlet />}>
            <Route
              index
              element={
                <RequireAuthLogin>
                  <LoginScreen />
                </RequireAuthLogin>
              }
            />
            <Route
              path="main/*"
              element={
                <RequireAuth>
                  <MainScreenRoute />
                </RequireAuth>
              }
            />
            <Route path="about" element={<AboutScreen />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
