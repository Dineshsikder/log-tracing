import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ 
  root: {
    height: "100%",
    width: "100%",
    "& .MuiInputLabel-asterisk": { color: "red" },
    "& .MuiFormHelperText-contained": { color: "red" },
    '& .MuiFormControl-root': {
      width: '100%'
    },
    backgroundColor: "white",
    padding: '5%'
  },
  image: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // marginTop: 40,
    margin: "auto",
    display: "flex",
    height: 300,
    width: "108%"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    variant: "outlined",
    backgroundColor: "white",
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
    width: "200%",
    marginTop: 45,
  },
  fbLogin: {
    marginBottom: 40,
    position: "relative",
    "&& img": {
      position: "absolute",
      left: 10
    }
  },
  registerNow: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: '20%'
  },
  submit: {
    marginTop: 70,
  },
  space: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 30,
      height: 45,
    },
    "& .MuiInputLabel-outlined": {
      transform: "translate(0px, -27px) scale(1)",
      color: "black",
    },
    "& .MuiOutlinedInput-notchedOutline span": {
      display: "none",
    },
  },
  asterisk: {
    color: "red",
  },
  grid1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginLeft: 50,
    marginRight: 40,
  },
  box1: {
    marginTop: 30,
    marginBottom: 0,
    fontSize: 32,
    fontWeight: 600,
  },
  box2: {
    marginTop: 0,
    fontSize: 15
  },
  box3: {
    height: 44,
    fontSize: 32,
    fontWeight: 600,
    marginTop: 30,
    marginBottom: 0
  },
  textField: { width: "100%", marginTop: 50 },
  textFields: {
    margin: "20px 0 0 0px",
    width: "100%",
    background: "#FCFCFC",
    borderRadius: 5,
  },
  divider: {
    marginTop: "10%",
    color: "#000000",
    marginBottom: "10%",
    width: "45%",
  },
  orClass1: {
    display: "flex",
    marginBottom: -5,
  },
  orClass2: {
    margin: "auto"
  },
  showHide: {
    marginLeft: "90%",
    marginTop: "-4%",
  }
}));

export { useStyles }