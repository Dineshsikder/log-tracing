import { Box, Button, CssBaseline, FormControl, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
// import { getIndividualDetails } from "../util/api";
// import { loginApi } from "../utils/api";
import { useStyles } from "./SigninContainerStyle";

const pageImage = 'https://image.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg'

export default function SigninContainer() {

  const history = useHistory();
  const classes = useStyles();
  const [showErrorMsg, setShowErrorMsg] = useState("");
  const [passValue, setPassValue] = React.useState(false);

  useEffect(() => {
  }, []);

  const handleSubmit = (values: any, prop: { setSubmitting: any }) => {
    sessionStorage.setItem('user',JSON.stringify(values))
    history.push("/home")
    // loginApi(values.email, values.password).then((res: any) => {
    //   let user = jwt(res.data.access_token);
    // }).catch((err: any) => {
    //   setShowErrorMsg("Something went wrong, please check usename and password")
    // });
  };

  const handler = () => {
    history.push(`/register`);
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
            New to DEMO?
          </Box>
          <Box className={classes.box2} component="h3">
            Create an account to enjoy DEMO services!
          </Box>
          <img className={classes.image} src={pageImage} alt="DEMO" />
          <Button variant="outlined" color="secondary" fullWidth className={classes.registerNow} onClick={handler}>
            Register Now
          </Button>
        </Grid>
        <Grid item xs={12} sm={9} md={5} component={Paper} className={classes.avatar} elevation={0} square>
          <Box className={classes.paperChild}>
            <Box fontWeight="fontWeightBold" component="h1" className={classes.box3}>
              Sign In to DEMO
            </Box>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().required("Password is required"),
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
              }) => (
                <form noValidate onSubmit={handleSubmit} className={classes.form}>
                  <Grid item xs={12} sm={12}>
                    <FormControl>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="text-email-address"
                        name="email"
                        placeholder="Email address"
                        helperText={errors.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        className={classes.textFields}
                        required
                        classes={{
                          root: classes.space,
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div>
                      <FormControl>
                        <TextField
                          fullWidth
                          variant="outlined"
                          id="text-password"
                          name="password"
                          type={passValue ? "text" : "password"}
                          placeholder="Password"
                          helperText={errors.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.password}
                          className={classes.textFields}
                          required
                          classes={{
                            root: classes.space,
                          }}
                        />
                      </FormControl>
                      <InputAdornment position="end" className={classes.showHide}>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          size="small"
                          style={{marginBottom: '25%'}}
                        >
                          {passValue ? (
                            <Visibility />
                          ) : (
                              <VisibilityOff />
                            )}
                        </IconButton>
                      </InputAdornment>
                    </div>
                  </Grid>
                  {
                    showErrorMsg ? <Typography style={{ color: 'red' }}>{showErrorMsg}</Typography> : ''
                  }
                  <Button type="submit" color="primary" variant="contained" fullWidth className={classes.submit}>
                    Sign In
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
