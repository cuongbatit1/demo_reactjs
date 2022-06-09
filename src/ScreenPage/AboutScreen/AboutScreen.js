import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useWindowResize } from "../../hooks/useWindowResize";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
function AboutScreen() {
  const { t } = useTranslation();
  const drawerWidth = 0;
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  const data = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5616/3744",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "https://picsum.photos/id/1/5616/3744",
    },
    {
      id: "10",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url: "https://picsum.photos/id/10/2500/1667",
    },
    {
      id: "100",
      author: "Tina Rataj",
      width: 2500,
      height: 1656,
      url: "https://unsplash.com/photos/pwaaqfoMibI",
      download_url: "https://picsum.photos/id/100/2500/1656",
    },
    {
      id: "1000",
      author: "Lukas Budimaier",
      width: 5626,
      height: 3635,
      url: "https://unsplash.com/photos/6cY-FvMlmkQ",
      download_url: "https://picsum.photos/id/1000/5626/3635",
    },
    {
      id: "1001",
      author: "Danielle MacInnes",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/1DkWWN1dr-s",
      download_url: "https://picsum.photos/id/1001/5616/3744",
    },
    {
      id: "1002",
      author: "NASA",
      width: 4312,
      height: 2868,
      url: "https://unsplash.com/photos/6-jTZysYY_U",
      download_url: "https://picsum.photos/id/1002/4312/2868",
    },
    {
      id: "1003",
      author: "E+N Photographies",
      width: 1181,
      height: 1772,
      url: "https://unsplash.com/photos/GYumuBnTqKc",
      download_url: "https://picsum.photos/id/1003/1181/1772",
    },
    {
      id: "1004",
      author: "Greg Rakozy",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/SSxIGsySh8o",
      download_url: "https://picsum.photos/id/1004/5616/3744",
    },
    {
      id: "1005",
      author: "Matthew Wiebe",
      width: 5760,
      height: 3840,
      url: "https://unsplash.com/photos/tBtuxtLvAZs",
      download_url: "https://picsum.photos/id/1005/5760/3840",
    },
  ];
  const size = useWindowResize();
  return (
    <>
      <Typography variant="h5" component="div" mt={0} ml={2}>
        {t("about_screen")}
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        User list and trash save to local use localStorage
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        Config load data user in constants/AppConstants.js
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        Use redux and redux toolkit with setup the key in constants/AppConstants.js
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        Use React Router Dom v6{" "}
        <a
          href="https://reactrouter.com/docs/en/v6/getting-started/overview"
          target="_blank"
          rel="noreferrer"
        >
          https://reactrouter.com/docs/en/v6/getting-started/overview
        </a>
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        Change language use{" "}
        <a href="https://react.i18next.com/" target="_blank" rel="noreferrer">
          https://react.i18next.com/
        </a>
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        UI use Material UI{" "}
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          https://mui.com/
        </a>{" "}
        and load user list use DataGrid of Material UI
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        Use webpack and webpack-dev-server . Run test local "npm run start-webpack" or "npm start"
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        Can use email and password in constants/AppConstants.js with userAdminInit. When user is
        delete then can't login. Admin can delete manager and member. Manager can delete member.
        Member can view user list and user trash
      </Typography>
      <Typography variant="subtitle1" component="div" mt={0} ml={2}>
        admin@gmail.com can delete all.
      </Typography>
      <Box
        sx={{
          width: size[0] - drawerWidth,
          height: 300,
          backgroundColor: "#419be0",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={false}
          autoPlaySpeed={10000000000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable={false}
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
        >
          {Object.values(data).map((post, indx) => {
            return (
              <Box
                key={indx}
                // onClick={() => this.toggleLightbox(indx)}
                // onClick={() => this.toggleLightbox(post, indx)}
              >
                <img
                  src={post.download_url}
                  alt="Alt text"
                  style={{
                    width: (size[0] - drawerWidth - 80) / 3,
                    height: 300,
                  }}
                />
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
}

export default AboutScreen;
