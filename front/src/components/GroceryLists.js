import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'

export default function GroceryLists() {
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
        arr.forEach((row) => {
            usernames[row.username] = row.username
        })
        return usernames
    }

    // fetch grocery_lists and users on load
    useEffect(() => {
        // load the grocery list info
        fetch('/grocery_lists')
            .then((res) => res.json())
            .then((res) => setData(res))
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
            .then((res) => res.json())
            // res is the added row, use it to update state
            .then((res) => setData([...data, ...res]))
            .catch((error) => {
                console.log('Error:', error)
            })

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
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                // let listDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
                                // newData['listDate'] = listDate
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
