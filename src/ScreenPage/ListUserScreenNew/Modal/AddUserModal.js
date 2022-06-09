import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";

import {
  closeDialogAction,
  openLoadingAction,
  addUserNew,
  changeFirstNameAction,
  changeLastNameAction,
  changeEmailAction,
  onBlurEmailAction,
  onBlurLastNameAction,
  onBlurFirstNameAction,
  changeRoleAction,
  onBlurRoleAction,
  handleShowHidePassword,
  changePasswordAction,
  onBlurPasswordAction,
} from "../../../redux/actions/addUserModalAction";
import { t } from "i18next";
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

const FirstNameInputComponent = () => {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const first_name = useSelector(
    (state) => state.addUserModalReducer.first_name
  );
  const errorFirstName = useSelector(
    (state) => state.addUserModalReducer.errorFirstName
  );
  // ---END--- DATA FROM REDUX
  return (
    <>
      {console.log("FirstNameInputComponent Render")}
      <TextField
        error={errorFirstName !== "" ? true : false}
        hiddenLabel
        defaultValue={first_name}
        variant="filled"
        type="text"
        style={{ width: "100%" }}
        onChange={(event) => dispatch(changeFirstNameAction(event))}
        onBlur={() => dispatch(onBlurFirstNameAction())}
        helperText={errorFirstName}
      />
    </>
  );
};

const LastNameInputComponent = () => {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const last_name = useSelector((state) => state.addUserModalReducer.last_name);
  const errorLastName = useSelector(
    (state) => state.addUserModalReducer.errorLastName
  );
  // ---END--- DATA FROM REDUX
  return (
    <>
      {console.log("LastNameInputComponent Render")}
      <TextField
        error={errorLastName !== "" ? true : false}
        hiddenLabel
        defaultValue={last_name}
        variant="filled"
        type="text"
        style={{ width: "100%" }}
        onChange={(event) => dispatch(changeLastNameAction(event))}
        onBlur={() => dispatch(onBlurLastNameAction())}
        helperText={errorLastName}
      />
    </>
  );
};

const EmailInputComponent = () => {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const email = useSelector((state) => state.addUserModalReducer.email);
  const errorEmail = useSelector(
    (state) => state.addUserModalReducer.errorEmail
  );
  // ---END--- DATA FROM REDUX
  return (
    <>
      {console.log("error EmailInputComponent Render")}
      <TextField
        error={errorEmail !== "" ? true : false}
        hiddenLabel
        defaultValue={email}
        variant="filled"
        style={{ width: "100%" }}
        type="email"
        onChange={(event) => dispatch(changeEmailAction(event))}
        onBlur={() => dispatch(onBlurEmailAction())}
        helperText={errorEmail}
      />
    </>
  );
};

const PasswordInputComponent = () => {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const password = useSelector((state) => state.addUserModalReducer.password);
  const showPassword = useSelector(
    (state) => state.addUserModalReducer.showPassword
  );
  const errorPassword = useSelector(
    (state) => state.addUserModalReducer.errorPassword
  );

  // ---END--- DATA FROM REDUX
  return (
    <>
      {console.log("PasswordInputComponent Render")}
      <FormControl
        error={errorPassword !== "" ? true : false}
        variant="filled"
        sx={{ minWidth: 120, width: "100%" }}
      >
        <FilledInput
          hiddenLabel
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => dispatch(changePasswordAction(event))}
          onBlur={() => dispatch(onBlurPasswordAction())}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => dispatch(handleShowHidePassword())}
                onMouseDown={(event) => event.preventDefault}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>{errorPassword}</FormHelperText>
      </FormControl>
    </>
  );
};

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

const SelectRoleComponent = () => {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const listOptionRole = useSelector(
    (state) => state.constantsReducer.listOptionRole
  );
  const role = useSelector((state) => state.addUserModalReducer.role);
  const errorRole = useSelector((state) => state.addUserModalReducer.errorRole);
  // ---END--- DATA FROM REDUX
  return (
    <>
      {console.log("SelectRoleComponent Render")}
      <FormControl
        error={errorRole !== "" ? true : false}
        variant="filled"
        sx={{ minWidth: 120, width: "100%" }}
      >
        <Select
          value={role}
          onChange={(event) => dispatch(changeRoleAction(event))}
          onBlur={() => dispatch(onBlurRoleAction())}
          displayEmpty
          input={<CustomeInputSelect />}
        >
          {listOptionRole.map(({ name, value }, index) => {
            return (
              <MenuItem key={index} value={value}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>{errorRole}</FormHelperText>
      </FormControl>
    </>
  );
};

const AddUserModal = () => {
  const isShowModal = useSelector(
    (state) => state.addUserModalReducer.isShowModal
  );
  const dispatch = useDispatch();
  console.log("GET REDUX : ", isShowModal);
  return (
    <>
      {console.log("AddUserModal Render")}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isShowModal}
        onClose={() => {
          dispatch(closeDialogAction());
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
              onClick={() => {
                dispatch(addUserNew());
              }}
            >
              Create new
            </Button>
          </ListItem>
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            {t("first_name")}
          </Typography>
          <FirstNameInputComponent />
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            {t("last_name")}
          </Typography>
          <LastNameInputComponent />
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            Email
          </Typography>
          <EmailInputComponent />
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            {t("password")}
          </Typography>
          <PasswordInputComponent />
          <Typography
            variant="subtitle1"
            component="div"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            Role
          </Typography>
          <SelectRoleComponent />
        </Box>
      </Modal>
    </>
  );
};

export default AddUserModal;
