import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'

//postData('/users', {
//method: 'POST',
//headers: {
//'Content-Type': 'application/json',
//},
//body: JSON.stringify(newData),
//})

export default function Users() {

    var columns = [
        { title: 'id', field: 'id', hidden: true },
        { title: 'Email', field: 'email' },
        { title: 'Username', field: 'username' },
    ]

    const [data, setData] = useState([])

    /*fetch users on load*/
    useEffect(() => {
        /*load the user's database info*/
        fetch('/users')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const handleRowAdd = (newData, resolve) => {
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Status code: ${response.status}`)
                }
                return response.json()
            })
            .then((dbRow) => {
                console.log('Row Added:', dbRow)
                setData([...data, ...dbRow])
                resolve()
            })
            .catch((error) => {
                console.log('Error:', error)
                resolve()
            })

        let dataToAdd = [...data]
        dataToAdd.push(newData)
        setData(dataToAdd)
        resolve()
    }

    const handleRowUpdate = (newData, oldData, resolve) => {
        fetch('/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Status code: ${response.status}`)
                }
                return response.json()
            })

            // Only update front end following a successful update to the backend
            .then((updatedData) => {
                console.log("update successful")
                setData([...updatedData])
                resolve()
            })
            .catch((error) => {
                console.log('Error:', error)
                resolve()
            })
    }

    const handleRowDelete = (oldData, resolve) => {
        fetch('/users', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(oldData),
        })
            .then(response => response.json())
            .then(data => {
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
                    title='Users'
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
