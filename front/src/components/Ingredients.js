import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'

export default function Ingredients() {

    // initialize state variables and update functions for table data
    // and foodGroup selector
    const [ingredients, setIngredients] = useState([])
    const [foodGroups, setFoodGroups] = useState({})

    var columns = [
        { title: 'Ingredient', field: 'name' },
        { title: 'id', field: 'ingredientID', hidden: true },
        { title: 'Food Group', field: 'fgname', lookup: foodGroups },
    ]


    // convert array of table rows to object for foodGroup selector - {name:name}
    function arrayToObject(arr) {
        let foodGroups = {}
        arr.forEach((row) => {
            foodGroups[row.name] = row.name
        })
        return foodGroups
    }

    // fetch data from db on component load
    useEffect(() => {

        // table data
        fetch('/ingredients')
            .then(res => res.json())
            .then(res => setIngredients(res))

        // food group selector data
        fetch('/food_group')
            .then((res) => res.json())
            .then((res) => setFoodGroups(arrayToObject(res)))
    }, [])

    const handleRowAdd = (newData, resolve) => {
        fetch('/ingredients', {
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
                setIngredients([...ingredients, ...dbRow])
                resolve()
            })
            .catch((error) => {
                console.log(error)
                resolve()
            })
    }

    const handleRowUpdate = (newData, oldData, resolve) => {
        console.log(newData)
        fetch('/ingredients', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then(data => data.json())
            .then(() => {
                console.log('Success')
                // update the table in the front-end
                const ingredientUpate = [...ingredients]
                const index = oldData.tableData.id
                ingredientUpate[index] = newData
                setIngredients([...ingredientUpate])
                resolve()
            })
            .catch((error) => {
                console.log('Error:', error)
                resolve()
            })
    }

    const handleRowDelete = (oldData, resolve) => {
        fetch('/ingredients', {
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
                const rows = [...ingredients]
                const index = oldData.tableData.id
                rows.splice(index, 1)
                setIngredients(rows)
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
                    title='Ingredients'
                    columns={columns}
                    data={ingredients}
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
