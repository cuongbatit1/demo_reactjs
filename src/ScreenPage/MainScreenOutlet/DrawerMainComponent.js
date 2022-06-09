import React from "react";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import DrawerComponent from "../../component/DrawerComponent";
import DrawerHeaderComponent from "../../component/DrawerHeaderComponent";
import ListItemDrawer from "../../component/ListItemDrawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

function DrawerMainComponent(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---START--- DATA FROM REDUX
  const listDrawer = useSelector((state) => state.constantsReducer.listDrawer);
  const itemTrash = useSelector((state) => state.constantsReducer.itemTrash);
  const isOpenDrawer = useSelector(
    (state) => state.headerMainReducer.isOpenDrawer
  );
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const clickNavigate = useCallback(
    (path) => {
      console.log("SSSSS: ", path);
      navigate(path);
    },
    [navigate]
  );
  // --- END --- funtion handle in component
  return (
    <>
      {console.log("DrawerMainComponent Render")}
      <DrawerComponent variant="permanent" open={isOpenDrawer}>
        <DrawerHeaderComponent />
        <List disablePadding>
          {listDrawer.map((item, index) => (
            <ListItemDrawer
              key={index}
              index={index}
              item={item}
              clickChange={clickNavigate}
            />
          ))}
        </List>
        <Divider />
        <List disablePadding>
          <ListItemDrawer
            key={1000}
            index={1000}
            item={itemTrash}
            clickChange={clickNavigate}
          />
        </List>
      </DrawerComponent>
    </>
  );
}

export default memo(DrawerMainComponent);
