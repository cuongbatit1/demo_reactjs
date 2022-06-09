import { THEME_DARK_OFF, THEME_DARK_ON } from "../constants/actionTypes";
import {
  GridRowsProp,
  GridColDef,
  GridActionsCellItem,
  GridApi,
  GridCellValue,
} from "@mui/x-data-grid";
import PreviewIcon from "@mui/icons-material/Preview";
import { Button } from "@mui/material";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

const initState = {
  listDrawer: [
    {
      text: "dashboard",
      icon: "DashboardOutlined",
      path: "/main",
    },
    {
      text: "user",
      icon: "GroupOutlined",
      path: "/main/user",
    },
    {
      text: "project",
      icon: "Folder",
      path: "/main/project",
    },
    {
      text: "movie",
      icon: "Folder",
      path: "/main/movie",
    },
    {
      text: "about",
      icon: "InfoOutlined",
      path: "/main/about",
    },
  ],
  itemTrash: {
    text: "trash",
    icon: "DeleteOutlined",
    path: "/main/trash",
  },
  listHeaderUser: [
    {
      field: "id",
      headerName: "ID",
      sortable: false,
      width: 50,
    },
    {
      field: "first_name",
      sortable: false,
      renderHeader: (headerparams) => {
        return t(headerparams.field);
      },
      width: 200,
    },
    {
      field: "last_name",
      sortable: false,
      renderHeader: (headerparams) => {
        return t(headerparams.field);
      },
      width: 200,
    },
    {
      field: "email",
      sortable: false,
      renderHeader: (headerparams) => {
        return t(headerparams.field);
      },
      width: 200,
    },
    {
      field: "password",
      sortable: false,
      renderHeader: (headerparams) => {
        return t(headerparams.field);
      },
      width: 100,
    },
    {
      field: "role",
      sortable: false,
      renderHeader: (headerparams) => {
        return t(headerparams.field);
      },
    },
    {
      field: "is_deleted",
      sortable: false,
      renderHeader: (headerparams) => {
        return t(headerparams.field);
      },
    },
    {
      field: "view_user",
      sortable: false,
      type: "actions",
      renderCell: (params) => {
        const navigate = useNavigate();
        const onClick = useCallback((e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          console.log("thisRow", thisRow);
          return navigate("/main/user/" + thisRow.id, { state: thisRow });
        }, []);

        return (
          <>
            <Button
              variant="contained"
              startIcon={<PreviewIcon />}
              onClick={onClick}
            >
              {t("view")}
            </Button>
          </>
        );
      },
    },
  ],
  listOptionRole: [
    { name: "Choose an option", value: "" },
    { name: "Admin", value: "admin" },
    { name: "Manager", value: "manager" },
    { name: "Member", value: "member" },
  ],
};
function constantsReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default constantsReducer;
