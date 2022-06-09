import * as React from "react";
import { memo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import AuthWrapper1 from "../../component/AuthWrapper1";
import AuthCardWrapper from "../../component/AuthCardWrapper";
import {
  changeEmailLoginAction,
  changePasswordLoginAction,
  handleCheckRememberMe,
  handleShowHidePasswordLogin,
  onBlurEmailLoginAction,
  onBlurPasswordLoginAction,
  submitLogin,
} from "../../redux/actions/loginAction";
import DialogMessage from "../Dialog/DialogMessage";
import LoadingModalDialog from "../Dialog/LoadingModal";

const EmailInputComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // ---START--- DATA FROM REDUX
  const email = useSelector((state) => state.loginReducer.email);
  const errorEmail = useSelector((state) => state.loginReducer.errorEmail);
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const onChangeEmail = useCallback((event) => dispatch(changeEmailLoginAction(event)), [dispatch]);

  const onBlurEmail = useCallback(() => dispatch(onBlurEmailLoginAction()), [dispatch]);

  // --- END --- funtion handle in component
  return (
    <>
      {console.log("EmailInputComponent Render")}
      <TextField
        sx={{ mb: 2 }}
        error={errorEmail !== "" ? true : false}
        // defaultValue={email}
        value={email}
        label={t("email")}
        variant="outlined"
        style={{ width: "100%" }}
        type="email"
        onChange={onChangeEmail}
        onBlur={onBlurEmail}
        helperText={errorEmail}
      />
    </>
  );
};

const PasswordInputComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // ---START--- DATA FROM REDUX
  const password = useSelector((state) => state.loginReducer.password);
  const showPassword = useSelector((state) => state.loginReducer.showPassword);
  const errorPassword = useSelector((state) => state.loginReducer.errorPassword);

  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const onChangePassword = useCallback(
    (event) => dispatch(changePasswordLoginAction(event)),
    [dispatch]
  );

  const onBlurPassword = useCallback(() => dispatch(onBlurPasswordLoginAction()), [dispatch]);

  const showHidePassword = useCallback(() => dispatch(handleShowHidePasswordLogin()), [dispatch]);
  // --- END --- funtion handle in component
  return (
    <>
      {console.log("PasswordInputComponent Render")}
      <FormControl
        error={errorPassword !== "" ? true : false}
        variant="outlined"
        sx={{ minWidth: 120, width: "100%" }}
      >
        <InputLabel htmlFor="outlined-adornment-password">{t("password")}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label={t("password")}
          type={showPassword ? "text" : "password"}
          // defaultValue={password}
          value={password}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={showHidePassword}
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

const CheckBoxActiveComponent = () => {
  const dispatch = useDispatch();
  // ---START--- DATA FROM REDUX
  const isRemember = useSelector((state) => state.loginReducer.isRemember);
  // ---END--- DATA FROM REDUX

  // --- START --- funtion handle in component useCallback

  const clickCheckBox = useCallback(() => dispatch(handleCheckRememberMe()), [dispatch]);
  // --- END --- funtion handle in component
  return (
    <>
      {console.log("CheckBoxActiveComponent Render")}
      <Box style={{}}>
        <Checkbox
          checked={isRemember}
          style={{ color: "black" }}
          inputProps={{
            "aria-label": "select all desserts",
          }}
          onChange={clickCheckBox}
        />
      </Box>
    </>
  );
};

function LoginScreen() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // --- START --- funtion handle in component useCallback

  const onSubmitLogin = useCallback(() => dispatch(submitLogin(navigate)), [dispatch, navigate]);
  // --- END --- funtion handle in component
  return (
    <>
      <AuthWrapper1>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: "100vh" }}>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: "calc(100vh - 68px)" }}
            >
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <AuthCardWrapper>
                  <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textDecoration: "none",
                          mb: 2,
                          textAlign: "center",
                        }}
                      >
                        Login with email
                      </Typography>
                      <EmailInputComponent />
                      <PasswordInputComponent />
                      <Grid
                        sx={{ mt: 2, mb: 2 }}
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <CheckBoxActiveComponent />
                        <Typography sx={{ flexGrow: 1 }} variant="h6" component="h2">
                          {t("remember_me")}
                        </Typography>
                      </Grid>
                      <Button
                        sx={{ width: "100%", fontSize: 18 }}
                        variant="contained"
                        onClick={onSubmitLogin}
                      >
                        {t("sign_in")}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item container direction="column" alignItems="center" xs={12}>
                        <Typography
                          component={Link}
                          to="/register/"
                          variant="subtitle1"
                          sx={{ textDecoration: "none" }}
                        >
                          Don&apos;t have an account?
                        </Typography>

                        <Typography
                          component={Link}
                          to="/about/"
                          variant="subtitle1"
                          sx={{ textDecoration: "none" }}
                        >
                          Go to About
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AuthCardWrapper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ m: 3, mt: 1 }}></Grid>
        </Grid>
      </AuthWrapper1>
      <DialogMessage />
      <LoadingModalDialog />
    </>
  );
}

export default LoginScreen;
