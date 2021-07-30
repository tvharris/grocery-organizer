import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import { forwardRef } from 'react'
import Container from '@material-ui/core/Container'
import UserSelector from './UserSelector'


import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

export default function UserIngredients() {
    var columns = [
        { title: 'id', field: 'id', hidden: true },
        {
            title: 'Ingredient',
            field: 'name',
            //lookup: { Carrots: 'Carrots', Cilantro: 'Cilantro', Milk: 'Milk' },
        },
    ]



    /*fetch user_ingredients on load*/
    //useEffect(() => {
    //[>load the user's database info<]
    //fetch('http://0.0.0.0:5000/user_ingredients')
    //.then(res => res.json())
    //.then(res =>
    //setData([...res])
    //)
    //console.log(data)
    //})
    const handleRowAdd = (newData, resolve) => {
        let dataToAdd = [...data]
        dataToAdd.push(newData)
        setData(dataToAdd)
        resolve()
    }

    const handleRowUpdate = (newData, oldData, resolve) => {
        const dataUpdate = [...data]
        const index = oldData.tableData.id
        dataUpdate[index] = newData
        setData([...dataUpdate])
        resolve()
    }

    const handleRowDelete = (oldData, resolve) => {
        const dataDelete = [...data]
        const index = oldData.tableData.id
        dataDelete.splice(index, 1)
        setData([...dataDelete])
        resolve()
    }


    // State for the Users
    const [users, setUsers] = useState([]);

    // State for Selector
    const [selectedUser, setSelectedUser] = useState('')

    // State for UserIngredients
    const [data, setData] = useState([])

    useEffect(() => {

        // Use GET request to maintain RESTfulness of API
        fetch(`http://0.0.0.0:5000/user_ingredients/${selectedUser}`)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
                setData([...data])
            })
            .catch((error) => {
                console.log('Error:', error)
            })

    }, [selectedUser])



    /*fetch ingredients on load*/
    useEffect(() => {
        /*load the user's database info*/
        fetch('http://0.0.0.0:5000/users')
            .then(res => res.json())
            .then(res =>
                setUsers([...res])
            )
    }, [])


    return (
        <div>
        <Container maxWidth='sm'>

        {/* User Selector */}
        <UserSelector
        users={users}
        setUsers={setUsers}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        />

        <br></br>

        {/* Table Elements */}
        <MaterialTable
        title='User Ingredients'
        columns={columns}
        data={data}
        icons={tableIcons}
        editable={{
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    handleRowUpdate(newData, oldData, resolve)
                }),
                    onRowAdd: (newData) =>
                new Promise((resolve) => {
                    handleRowAdd(newData, resolve)
                }),
                    onRowDelete: (oldData) =>
                new Promise((resolve) => {
                    handleRowDelete(oldData, resolve)
                }),
        }}
        />
        </Container>
        </div>
    )
}
