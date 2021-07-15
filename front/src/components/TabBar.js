import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import React, { useState } from 'react'
import {set} from 'lodash'

export default function TabBar() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            <AppBar position="static">
                <Tabs
                    value = {value}
                    onChange = {handleChange}
                >
                    <Tab label="Users"/>
                    <Tab label="Ingredients"/>
                    <Tab label="GroceryLists"/>
                    <Tab label="User_Ingredients"/>
                    <Tab label="GroceryLists_Ingredients"/>
                </Tabs>
            </AppBar>
        </div>
    )
}

