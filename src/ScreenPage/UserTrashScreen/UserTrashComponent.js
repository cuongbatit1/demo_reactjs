import { React } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { actionSelectUserListRestore } from "../../redux/actions/userTrashAction";
import { checkRoleEditDataGird } from "../../utils/Utils";
import { getListUserTrash } from "../../redux/selector/userTrashSelector";

const heightBar = 24 * 2 + 28 + 16 + 5;

function UserTrashComponent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const girdRefData = useGridApiRef();
  // ---START--- DATA FROM REDUX
  const listHeaderUser = useSelector(
    (state) => state.constantsReducer.listHeaderUser
  );
  const listUserTrash = useSelector(getListUserTrash);
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
        rows={listUserTrash}
        columns={listHeaderUser}
        isRowSelectable={(params) => {
          return checkRoleEditDataGird(userAuth, params);
        }}
        onSelectionModelChange={(newSelection) => {
          console.log("newSelection Trash", newSelection);
          dispatch(actionSelectUserListRestore(newSelection));
        }}
      />
    </Box>
  );
}

export default UserTrashComponent;
