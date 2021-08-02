import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import UserSelector from './UserSelector'

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
    //fetch('/user_ingredients')
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
    const [users, setUsers] = useState([])

    // State for Selector
    const [selectedUser, setSelectedUser] = useState('')

    // State for UserIngredients
    const [data, setData] = useState([])

    useEffect(() => {
        // Use GET request to maintain RESTfulness of API
        fetch(`/user_ingredients/${selectedUser}`)
            .then((response) => response.json())
            .then((data) => {
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
        fetch('/users')
            .then((res) => res.json())
            .then((res) => setUsers([...res]))
    }, [])

    return (
        <div>
            <Container maxWidth='sm'>
                <h6 class='MuiTypography-h6' style={{ margin: 0, textAlign: 'center' }}>
                    Select a User to View Their Ingredients
                </h6>

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
