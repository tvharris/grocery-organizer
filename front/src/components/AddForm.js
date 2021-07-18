import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TextField
          id="standard-full-width"
          label="Search Bar"
          style={{ margin: 8 }}
          placeholder="Search Here"
          helperText="Search"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </div>
  );
}