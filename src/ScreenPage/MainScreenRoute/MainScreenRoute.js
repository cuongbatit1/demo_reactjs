import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AboutScreen from "../AboutScreen/AboutScreen";
import DashboardScreen from "../DashboardScreen/DashboardScreen";
import MainScreenOutlet from "../MainScreenOutlet/MainScreenOutlet";
import PageNotFound from "../PageNotFound";
import ListUserScreenNew from "../ListUserScreenNew/ListUserScreenNew";
import DetailUserScreen from "../DetailUserScreen/DetailUserScreen";
import UserTrashScreen from "../UserTrashScreen/UserTrashScreen";
import MovieScreen from "../MovieScreen/MovieScreen";

function MainScreenRoute() {
  return (
    <>
      {console.log("MainScreenRoute Render")}
      <Routes>
        <Route path="/" element={<MainScreenOutlet />}>
          <Route index element={<DashboardScreen />} />
          <Route path="user" element={<ListUserScreenNew />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="movie" element={<MovieScreen />} />
          <Route path="user/:id" element={<DetailUserScreen />} />
          <Route path="trash" element={<UserTrashScreen />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainScreenRoute;
