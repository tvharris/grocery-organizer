import './App.css'
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TestAPI from './components/TestAPI.js'
import Users from './components/Users'
import GroceryList from './components/GroceryList'
import Ingredients from './components/Ingredients'
import User_Ingredients from './components/UserIngredients'
import GroceryList_Ingredients from './components/groceryListIngredient'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Users' {...a11yProps(0)} />
          <Tab label='GroceryLists' {...a11yProps(1)} />
          <Tab label='Ingredients' {...a11yProps(2)} />
           <Tab label='User_Ingredients' {...a11yProps(3)} />
            <Tab label='GroceryList_Ingredients' {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Users/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GroceryList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ingredients />
      </TabPanel>
       <TabPanel value={value} index={3}>
        <User_Ingredients />
      </TabPanel>
       <TabPanel value={value} index={4}>
        <GroceryList_Ingredients />
      </TabPanel>
    </div>
  )
}

// function About() {
//   return <h2>About</h2>
// }

// function Users() {
//   return <h2>Users</h2>
// }
