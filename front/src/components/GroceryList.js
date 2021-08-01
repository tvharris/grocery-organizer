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
        // date is not editable because in the back-end we use the current datetime
        { title: 'Date', field: 'listDate', type: 'date', editable: 'never' },
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
        fetch('/grocery_lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data)
            })
            .catch((error) => {
                console.log('Error:', error)
            })

        // update front-end state
        let dataToAdd = [...data]
        console.log('newdata: ', newData)
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
        fetch('/grocery_lists', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(oldData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data)
            })
            .catch((error) => {
                console.log('Error:', error)
            })

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
