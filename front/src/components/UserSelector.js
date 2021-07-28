import React, { useState, useEffect } from 'react';
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
    const [user, setUser] = useState([]);

    /*fetch ingredients on load*/
    useEffect(() => {
        /*load the user's database info*/
        fetch('http://0.0.0.0:5000/users')
            .then(res => res.json())
            .then(res =>
                setUser([...res])
            )
        console.log(user)
    },[])

    const handleChange = (event) => {
        setUser(event.target.value);
    };

    // mapping attempt
    //{ user.map((u) => (<MenuItem value={u.userID}>{u.username}</MenuItem>))}
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={user}
                    onChange={handleChange}
                >
                    { user.map((u) => (<MenuItem value={u.userID}>{u.username}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}
