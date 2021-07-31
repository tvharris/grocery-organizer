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

export default function SimpleSelect({ users, selectedUser, setSelectedUser }) {

    const classes = useStyles();
    const handleChange = (event) => {
        setSelectedUser(event.target.value);
    };

    return (
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select User</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedUser}
        onChange={handleChange}
        >
        {users.map((u) => (<MenuItem value={u.userID}>{u.username}</MenuItem>))}
        </Select>
        </FormControl>
        </div>
    );
}
