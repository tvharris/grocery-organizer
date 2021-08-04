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
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [])

    const handleRowAdd = (newData, resolve) => {
        fetch('/food_group', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Status code: ${response.status}`)
                }
                return response.json()
            })
            .then((dbRow) => {
                console.log('Success:', dbRow)

                // newData is an object, e.g., {name: 'vegetable'}, which
                // also has the material-table row index
                // dbRow is the added row returned from the db, e.g., [{foodGroupID: 17, name: 'vegetable'}]
                // add the ID from the dbRow to newData and update the table
                newData['foodGroupID'] = dbRow[0]['foodGroupID']
                let rows = [...data]
                rows.push(newData)
                setData(rows)
                resolve()
            })
            .catch((error) => {
                console.log(error)
                resolve()
            })
    }

    const handleRowUpdate = (newData, oldData, resolve) => {
        fetch('/food_group', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Status code: ${response.status}`)
                }
            })
            .then(() => {
                console.log('Success')
                const rows = [...data]
                const index = oldData.tableData.id
                rows[index] = newData
                setData([...rows])
                resolve()
            })
            .catch((error) => {
                console.log(error)
                resolve()
            })
    }

    const handleRowDelete = (oldData, resolve) => {
        fetch('/food_group', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(oldData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Status code: ${response.status}`)
                }
            })
            .then(() => {
                console.log('Success')
                const rows = [...data]
                const index = oldData.tableData.id
                rows.splice(index, 1)
                setData([...rows])
                resolve()
            })
            .catch((error) => {
                console.log(error)
                resolve()
            })
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
