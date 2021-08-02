import MaterialTable from 'material-table'
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import React, { useEffect } from 'react'

export default function FoodGroups() {
    var columns = [
        { title: 'id', field: 'foodGroupID', hidden: true },
        { title: 'Food Group', field: 'name' },
    ]

    const [data, setData] = useState([])

    /*fetch users on load*/
    useEffect(() => {
        /*load the user's database info*/
        fetch('/food_group')
            .then(res => res.json())
            .then(res =>
                setData(res)
            )
    }, [])

    const handleRowAdd = (newData, resolve) => {
        fetch('/food_group', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
            })
            .catch((error) => {
                console.log('Error:', error)
            })

        let dataToAdd = [...data]
        dataToAdd.push(newData)
        setData(dataToAdd)
        resolve()
    }

    const handleRowUpdate = (newData, oldData, resolve) => {
        fetch('/food_group', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
            })
            .catch((error) => {
                console.log('Error:', error)
            })

        const dataUpdate = [...data]
        const index = oldData.tableData.id
        dataUpdate[index] = newData
        setData([...dataUpdate])
        resolve()
    }

    const handleRowDelete = (oldData, resolve) => {
        fetch('/food_group', {
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
                    title='Food Groups'
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
