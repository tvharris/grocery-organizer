import MaterialTable from 'material-table'
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import React, { useEffect } from 'react'

export default function Ingredients() {
    var columns = [
        { title: 'id', field: 'foodGroupID', hidden: true },
        { title: 'Ingredient', field: 'name' },
        {
            title: 'Food Group',
            field: 'FoodGroups.name',

            // Will need to fix this to add dropdown working - format {foodGroupID: Name}
            // Probably a case for state.

            //lookup: { Vegetable: 'Vegetable', Dairy: 'Dairy' },
        },
    ]

    const [data, setData] = useState([])

    /*fetch ingredients on load*/
    useEffect(() => {
        /*load the user's database info*/
        fetch('/ingredients')
            .then(res => res.json())
            .then(res =>
                setData([...res])
            )
        console.log(data)
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
        fetch('/ingredients', {
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
                    title='Ingredients'
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
