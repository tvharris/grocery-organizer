import MaterialTable from 'material-table'
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import React, { useEffect } from 'react'

export default function GroceryList() {
    
    // data for the grocery list table
    const [data, setData] = useState([])
    // data for the username lookup (i.e., dropdown)
    const [userData, setUserData] = useState({})

    var columns = [
        { title: 'id', field: 'listID', hidden: true },
        { title: 'Username', field: 'username', lookup: userData },
        { title: 'Date', field: 'listDate', type: 'date' },
    ]

    // convert array of table rows to object for lookup - {username:username}
    function arrayToObject(arr) {
        let usernames = {}
        for (let i = 0; i < arr.length; ++i)
            usernames[arr[i].username] = arr[i].username
        return usernames
    }

    // fetch grocery_lists and users on load
    useEffect(() => {
        // load the grocery list info
        fetch('/grocery_lists')
            .then((res) => res.json())
            .then((res) => setData([...res]))
        // load the user info for the lookup (i.e., dropdown)
        fetch('/users')
            .then((res) => res.json())
            .then((res) => setUserData(arrayToObject(res)))
    }, [])

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

    return (
        <div>
            <Container maxWidth='sm'>
                <MaterialTable
                    title='Grocery Lists'
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
