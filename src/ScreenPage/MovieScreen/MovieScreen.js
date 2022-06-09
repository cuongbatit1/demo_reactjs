import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import LoadingMovieModal from "./Modal/LoadingMovieModal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import DialogMessage from "../Dialog/DialogMessage";
import { useWindowResize } from "../../hooks/useWindowResize";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { style } from "@mui/system";
import movieActionSaga from "../../saga/movieActionSaga";
import { drawerWidth } from "../../constants/AppConstants";
import CarouselGenreComponent from "./CarouselGenreComponent";

function MovieScreen() {
  const size = useWindowResize();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ---START--- DATA FROM REDUX

  const userAuth = useSelector((state) => state.userAuthReducer.userAuth);
  // ---END--- DATA FROM REDUX

  useEffect(() => {
    console.log("useEffect  MovieScreen when app start and Load a turn after render");
    dispatch(movieActionSaga.loadDataFirst());
    // dispatch({ type: "FETCHED_DOG1" });
  }, []);

  useEffect(() => {
    return () => {
      console.log("useEffect  MovieScreen unmount destroy");
    };
  }, []);
  var settings = {
    dots: true,
  };
  return (
    <>
      {console.log("MovieScreen render")}
      <Typography variant="h3" component="div" mt={0} ml={2}>
        MovieScreen
      </Typography>
      <Typography variant="subtitle2" component="div" mt={0} ml={2}>
        GENRE
      </Typography>
      <Box
        sx={{
          width: size[0] - drawerWidth - 16 - 16,
          height: 110,
          pt: 2,
          mr: 2,
          ml: 2,
        }}
      >
        <CarouselGenreComponent sizeScreen={size} />
      </Box>

      <LoadingMovieModal />
      <DialogMessage />
    </>
  );
}

export default MovieScreen;
