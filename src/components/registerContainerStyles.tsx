import { InputBase } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    "& .MuiInputLabel-asterisk": { color: "red" },
    "& .MuiFormHelperText-contained": { color: "red" },
    backgroundColor: "white",
    '& .MuiFormControl-root': {
      width: '100%',
      borderRadius: 20
    },
    padding: '2%'
  },
  selectError: {
    color: "red",
    fontSize: 12,
    // marginTop: -17,
    // marginBottom: 20,
    marginLeft: 7,
  },
  errorMsg: {
    color: "red",
    fontSize: 12,
    marginTop: 8,
  },
  errorMsg2: {
    color: "red",
    fontSize: 12,
    marginTop: 76,
  },
  firstName: {
    color: "red",
    fontSize: 12,
    marginTop: -17,
    marginBottom: 20,
    marginLeft: 7,
    backgroundColor: "#ced4da",
  },
  image: {
    // marginTop: 40,
    margin: "auto",
    display: "flex",
    width: "100%"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    variant: "outlined",
    borderRadius: 20,
  },
  paperChild: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    variant: "outlined",
    marginLeft: 70,
    marginRight: -50,
  },
  avatar: {
    margin: theme.spacing(0, 12.5, 8, 0),
    borderLeft: "2px solid lightgrey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 40
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    paddingRight: '5%'
  },
  fbLogin: {
    marginTop: 20,
    marginBottom: 40,
    position: "relative",
    "&& img": {
      position: "absolute",
      left: 10
    }
  },
  signIn: {
    marginTop: 20,
    marginBottom: 20
  },
  registerNow: {
    marginTop: 10
  },
  submit: {
    marginTop: 40,
  },
  space: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 30,
      height: 45,
    },
    // "& .MuiInputLabel-outlined": {
    //   transform: "translate(0px, -27px) scale(1)",
    //   color: "black",
    // },
    "& .MuiOutlinedInput-notchedOutline span": {
      display: "none",
    },
  },

  errorOutlined: {
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "red" },
  },
  asterisk: {
    color: "red",
  },
  divider: {
    marginTop: "10%",
    color: "black",
    marginBottom: "10%",
    width: "45%",
  },
  orClass1: {
    display: "flex",
    marginBottom: -15,
  },
  orClass2: {
    margin: "auto",
  },
  grid1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 40
  },
  box1: {
    marginTop: 30,
    marginBottom: 0,
    fontSize: 32
  },
  box2: {
    marginTop: 0,
    fontSize: 15
  },
  box3: {
    height: 44,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 0,
    marginLeft: '-7%'
  },
  nativeSelect: {
    width: "100%",
    outline: "none",
    "&& select": {
      height: 30,
      borderRadius: 40
    }
  },
  textFields: {
    margin: "20px 0 0 0px",
    width: "100%",
    background: "#FCFCFC",
    borderRadius: 5,
  },
  lastName: {
    margin: "20px 0 0 0px",
    width: "100%",
    background: "#FCFCFC",
    borderRadius: 5,
  },
  lastname: {
    marginLeft: "12px",
  },
  firstname: {
    marginRight: "12px",
  },
  textField3: { marginTop: 50 },
  showHide: {
    marginLeft: "90%",
    marginTop: "-4%",
  }
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    marginLeft: "0px",
  },
  input: {
    borderRadius: 30,
    height: 25,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
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
      borderRadius: 30,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);


export { useStyles, BootstrapInput };

