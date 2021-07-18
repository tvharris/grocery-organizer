import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [foodGroup, setFoodGroup] = React.useState('Vegetable');

  const handleChange = (event) => {
    setFoodGroup(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Food Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={foodGroup}
          onChange={handleChange}
        >
          <MenuItem value={1}>Vegetable</MenuItem>
          <MenuItem value={2}>Meat/Fish</MenuItem>
          <MenuItem value={3}>Dairy</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
