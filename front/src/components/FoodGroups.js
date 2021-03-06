import MaterialTable from 'material-table'
import Container from '@material-ui/core/Container'
import { useState, useEffect } from 'react'

export default function FoodGroups() {
    var columns = [
        { title: 'id', field: 'foodGroupID', hidden: true },
        { title: 'Food Group', field: 'name' },
    ]

    // initialize state variable and update function for table data
    const [data, setData] = useState([])

    // fetch data from db on component load
    useEffect(() => {
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
                // update the table with the new row
                setData([...data, ...dbRow])
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
                // update the table in the front-end
                const rows = [...data]
                const index = oldData.tableData.id
                rows[index] = newData
                setData(rows)
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
                // update the table in the front-end
                const rows = [...data]
                const index = oldData.tableData.id
                rows.splice(index, 1)
                setData(rows)
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
