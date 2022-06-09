import * as React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import DrawerHeaderComponent from "../../component/DrawerHeaderComponent";
import HeaderComponent from "./HeaderComponent";
import { useTranslation } from "react-i18next";
import DrawerMainComponent from "./DrawerMainComponent";
import { useWindowResize } from "../../hooks/useWindowResize";
import DialogConfirm from "./Dialog/DialogConfirm";
import DialogMessage from "../Dialog/DialogMessage";

function MainScreenOutlet() {
  const size = useWindowResize();
  const { t, i18n } = useTranslation();
  return (
    <>
      {console.log("MainScreenOutlet Render", size[1])}

      <Box sx={{ display: "flex" }}>
        <HeaderComponent />
        <DrawerMainComponent />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: size[1],
            pt: 1,
            pb: 3,
          }}
        >
          <DrawerHeaderComponent />
          <Outlet />
        </Box>
      </Box>
      <DialogConfirm />
      <DialogMessage />
    </>
  );
}

export default MainScreenOutlet;
