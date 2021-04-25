import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 5,
        paddingRight: 5,
        '& .CircularProgressbar': {
            width: 30
        },
        '& .MuiSelect-select.MuiSelect-select': {
            paddingRight: '10px !important'
        },
        '& .MuiOutlinedInput-root': {
            height: 30,
            color: 'white'
        },
        backgroundColor: '#262b40',
        color: 'white'
    },
    paper: {
        padding: theme.spacing(2),
        //   textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: '#4c5478',
        color: 'white'
    },
}));

export { useStyles }