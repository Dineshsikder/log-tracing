import { Box, Button, CssBaseline, Divider, FormControl, Grid, IconButton, InputAdornment, NativeSelect, Paper, TextField, Typography } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { BootstrapInput, useStyles } from "./registerContainerStyles";

const pageImage = 'https://media.istockphoto.com/vectors/registration-documents-puts-signature-stamp-flat-vector-id1132382388?b=1&k=6&m=1132382388&s=612x612&w=0&h=rQxXFjA4HAATQ7QZOFcKI4CSH1Pp_R3Wf7hb6KK4C9I='

export default function RegisterContainer() {

  const classes = useStyles();
  const history = useHistory();
  const [showErrorMsg, setShowErrorMsg] = useState("");
  const [passValue, setPassValue] = React.useState(false);

  useEffect(() => {

  }, []);

  const handleSubmit = (values: any, prop: { setSubmitting: any }) => {
  };

  async function postRegistration(regBody: any) {
    await axios.post(
      `http://sb-api.icsdtc.com/individual/individual`,
      regBody
    ).then((res: any) => {
      let fullName = res?.data?.legalName + ' ' + res?.data?.familyName;
      sessionStorage.setItem("userName", fullName);
      sessionStorage.setItem("fullName", fullName);
      sessionStorage.setItem("userId", res?.data?.id);
      sessionStorage.setItem("email", res?.data?.contactMedium[0]?.characteristic?.emailAddress);
    }).catch((err: any) => {
      setShowErrorMsg("Something went wrong, please try again after sometime")
      console.log("err", err)
    })
  }

  const handleSignIn = () => {
    history.push("/signin");
  };

  const handleClickShowPassword = () => {
    setPassValue(true);
  };

  const handleMouseDownPassword = () => {
    setPassValue(false);
  };

  return (
    <Paper className="mfe-custom-mui-paper-padding" style={{ margin: 60 }} square={false}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid className={classes.grid1} item xs={false} sm={3} md={5}>
          <Box component="h1" className={classes.box1}>
            Registered?
          </Box>
          <Box className={classes.box2} component="h3">
            Sign in to your account
          </Box>
          <img className={classes.image} src={pageImage} alt="ICS" />
          <Button color="secondary" variant="outlined" fullWidth className={classes.signIn} onClick={handleSignIn}>
            Sign in
          </Button>
        </Grid>
        <Grid item xs={12} sm={9} md={5} component={Paper} className={classes.avatar} elevation={0} square>
          <Box className={classes.paperChild}>
            <Box fontWeight="fontWeightBold" component="h3" className={classes.box3}>
              Create an account to enjoy DEMO services
            </Box>
            <Formik
              initialValues={{
                salutation: "",
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirm_password: "",
              }}
              validationSchema={Yup.object().shape({
                salutation: Yup.string().min(2).max(6).required(),
                firstname: Yup.string().max(50).required(),
                lastname: Yup.string().max(50).required(),
                email: Yup.string().email().required(),
                password: Yup.string().min(8).required(),
                confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
              })}
              onSubmit={handleSubmit}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                values,
                touched,
              }) => (
                <form noValidate onSubmit={handleSubmit} className={classes.form}>
                  <NativeSelect
                    name="salutation"
                    onChange={handleChange}
                    error
                    type="select"
                    required
                    value={values.salutation}
                    placeholder="Please select the salutation"
                    input={<BootstrapInput />}
                    className={classes.nativeSelect}
                    //helperText={errors.salutation}
                    onBlur={handleBlur}
                    variant="outlined"
                  >
                    <option value="">Please select the Salutation</option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Miss">Miss</option>
                  </NativeSelect>
                  {errors.salutation && touched.salutation && (
                    <div className={classes.selectError}>
                      {errors.salutation}
                    </div>
                  )}
                  {/* <Box display="flex"> */}
                  {/* <Grid item xs={12} sm={12} className={classes.firstname}> */}
                  <FormControl>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="text-first-name"
                      name="firstname"
                      placeholder="First name"
                      classes={{
                        root: classes.space,
                      }}
                      helperText={errors.firstname}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstname}
                      className={classes.textFields}
                      required
                    />
                  </FormControl>
                  {/* </Grid> */}
                  {/* <Grid item xs={12} sm={12} className={classes.lastname}> */}
                  <FormControl>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="text-last-name"
                      name="lastname"
                      placeholder="Last name"
                      classes={{
                        root: classes.space,
                      }}
                      helperText={errors.lastname}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastname}
                      className={classes.textFields}
                      required
                    />
                  </FormControl>
                  {/* </Grid> */}
                  {/* </Box> */}
                  <Grid item xs={12} sm={12}>
                    <FormControl>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="text-email-address"
                        name="email"
                        placeholder="Email address"
                        helperText={errors.email}
                        classes={{
                          root: classes.space,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        className={classes.textFields}
                        required
                      />
                    </FormControl>
                  </Grid>
                  <FormControl style={{marginBottom: '5%'}}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      // label="Password"
                      type="password"
                      placeholder="Enter your Password"
                      name="password"
                      required
                      // className={classes.textField3}
                      className={classes.textFields}
                      helperText={errors.password}
                      //helperText={errors.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      classes={{
                        root: classes.space,
                      }}
                    // InputLabelProps={{
                    //   classes: {
                    //     asterisk: classes.asterisk,
                    //   },
                    // }}
                    />
                    <InputAdornment position="end" className={classes.showHide}>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        size="small"
                        style={{ marginBottom: '40%' }}
                      >
                        {passValue ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  </FormControl>
                  <FormControl>
                    <TextField
                      fullWidth
                      variant="outlined"
                      // label="Confirm Password"
                      type="password"
                      placeholder="Enter your Password"
                      name="confirm_password"
                      required
                      // className={classes.textField3}
                      className={classes.textFields}
                      helperText={errors.confirm_password}
                      //helperText={errors.confirm_password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.confirm_password}
                      classes={{
                        root: classes.space,
                      }}
                    // InputLabelProps={{
                    //   classes: {
                    //     asterisk: classes.asterisk,
                    //   },
                    // }}
                    />
                    <InputAdornment position="end" className={classes.showHide}>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        size="small"
                        style={{ marginBottom: '40%' }}
                      >
                        {passValue ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  </FormControl>
                  {
                    showErrorMsg ? <Typography style={{ color: 'red' }}>{showErrorMsg}</Typography> : ''
                  }
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Register
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
