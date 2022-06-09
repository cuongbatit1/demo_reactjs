import { React } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { actionSelectUserList } from "./../../redux/actions/userListAction";
import { checkRoleEditDataGird } from "../../utils/Utils";

const heightBar = 24 * 2 + 28 + 16 + 5;

function UserListComponent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const girdRefData = useGridApiRef();
  // ---START--- DATA FROM REDUX
  const listHeaderUser = useSelector(
    (state) => state.constantsReducer.listHeaderUser
  );
  const listUser = useSelector((state) => state.userReducer.listUser);
  const userAuth = useSelector((state) => state.userAuthReducer.userAuth);
  // ---END--- DATA FROM REDUX
  return (
    <Box
      sx={{
        height: `calc(100% - ${heightBar}px)`,
        mr: 2,
        ml: 2,
      }}
    >
      <DataGrid
        checkboxSelection
        apiRef={girdRefData}
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableMultipleSelection
        disableMultipleColumnsFiltering
        disableMultipleColumnsSorting
        disableColumnResize
        // disableColumnReorder
        disableSelectionOnClick
        disableDensitySelector
        sx={{
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
        // hideFooterSelectedRowCount
        rowsPerPageOptions={[20, 30, 50, 100]}
        rows={listUser}
        columns={listHeaderUser}
        // onStateChange={(v) => {
        //   // setDensity(v.state.density.value);
        //   // HERE SET ICON SIZE STATE
        //   // console.log("vv", girdRefData.current.getAllRowIds());
        //   // debugger;
        //   const rowIds = v.selection;
        //   console.log("vv", rowIds);
        // }}
        isRowSelectable={(params) => {
          console.log("isRowSelectable params", params);
          return checkRoleEditDataGird(userAuth, params);
        }}
        onSelectionModelChange={(newSelection) => {
          console.log("newSelection", newSelection);
          const rowIds = girdRefData.current;
          console.log("vv", rowIds);
          dispatch(actionSelectUserList(newSelection));
        }}
      />
    </Box>
  );
}

export default UserListComponent;
