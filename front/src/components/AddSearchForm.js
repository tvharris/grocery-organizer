import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
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
    <div className={classes.root} style={{display: 'flex', 'align-items': 'center'}}>
    <div style={{flex: '1', 'margin-right': '10px'}}>
        <TextField
          id="magin-none"
          label="Search Bar"
          placeholder="Search Here"
          helperText="Search"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
         <Button variant="outlined" style={{height: '50%'}}>+</Button>
    </div>
  );
}