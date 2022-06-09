import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import addUserModalMobxViewModel from "../../mobxviewmodel/addUserModalMobxViewModel";
import { closeDialog } from "../../redux/actions/dialogAction";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  paddingTop: 1.5,
  paddingBottom: 1.5,
  paddingLeft: 3,
  paddingRight: 3,
};

const NameInputComponent = observer(function NameInputComponent(props) {
  const { addUserViewModel } = props;
  return (
    <>
      {console.log("NameInputComponent Render")}
      <TextField
        hiddenLabel
        defaultValue={addUserViewModel.name}
        variant="filled"
        type="text"
        style={{ width: "100%" }}
        onChange={addUserViewModel.handleChangeName}
      />
    </>
  );
});

const EmailInputComponent = observer(function EmailInputComponent(props) {
  const { addUserViewModel } = props;
  return (
    <>
      {console.log("EmailInputComponent Render")}
      <TextField
        hiddenLabel
        defaultValue={addUserViewModel.email}
        variant="filled"
        style={{ width: "100%" }}
        type="email"
        onChange={addUserViewModel.handleChangeEmail}
      />
    </>
  );
});

const PhoneInputComponent = observer(function PhoneInputComponent(props) {
  const { addUserViewModel } = props;
  return (
    <>
      {console.log("PhoneInputComponent Render")}
      <TextField
        hiddenLabel
        defaultValue={addUserViewModel.phone}
        variant="filled"
        type="tel"
        style={{ width: "100%" }}
        onChange={addUserViewModel.handleChangePhone}
      />
    </>
  );
});

const CustomeInputSelect = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    backgroundColor: "#0000000f",
    padding: "12px 16px 12px 17px",
    borderBottom: "1px solid #0000006b",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderBottom: "2px solid #1976d2",
    },
  },
}));

const SelectRoleComponent = observer(function SelectRoleComponent(props) {
  const { addUserViewModel } = props;
  return (
    <>
      {console.log("SelectRoleComponent Render")}
      <FormControl variant="filled" sx={{ minWidth: 120, width: "100%" }}>
        <Select
          value={addUserViewModel.role}
          onChange={addUserViewModel.handleChangeRole}
          displayEmpty
          input={<CustomeInputSelect />}
        >
          {addUserViewModel.listOptionRole.map(({ name, value }, index) => {
            return (
              <MenuItem key={index} value={value}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
});

const CheckBoxActiveComponent = observer(function CheckBoxActiveComponent(
  props
) {
  const { addUserViewModel } = props;
  return (
    <>
      {console.log("CheckBoxActiveComponent Render")}
      <Box style={{}}>
        <Checkbox
          checked={addUserViewModel.isActive}
          style={{ color: "black" }}
          inputProps={{
            "aria-label": "select all desserts",
          }}
          onChange={addUserViewModel.handleChangeActive}
        />
      </Box>
    </>
  );
});

const AddUserModalComponent = observer(function AddUserModalComponent(props) {
  const { homeViewModel } = props;
  const addUserViewModel = new addUserModalMobxViewModel();
  const showdialog = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  console.log("GET REDUX : ", showdialog);
  return (
    <>
      {console.log("AddUserModalComponent Render")}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // open={homeViewModel.open}
        // onClose={homeViewModel.handleClose}
        open={showdialog}
        onClose={() => {
          dispatch(closeDialog());
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <ListItem disablePadding>
            <ListItemText>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Add new users
              </Typography>
            </ListItemText>

            <Button
              style={{ borderRadius: 0, textTransform: "none" }}
              variant="contained"
            >
              Create new
            </Button>
          </ListItem>
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            Name
          </Typography>
          <NameInputComponent addUserViewModel={addUserViewModel} />
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            Email
          </Typography>
          <EmailInputComponent addUserViewModel={addUserViewModel} />
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            Phone
          </Typography>
          <PhoneInputComponent addUserViewModel={addUserViewModel} />
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            Role
          </Typography>
          <SelectRoleComponent addUserViewModel={addUserViewModel} />
          <ListItem disablePadding style={{ paddingTop: 12 }}>
            <CheckBoxActiveComponent addUserViewModel={addUserViewModel} />
            <ListItemText>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Active
              </Typography>
            </ListItemText>
          </ListItem>
        </Box>
      </Modal>
    </>
  );
});

export default AddUserModalComponent;
