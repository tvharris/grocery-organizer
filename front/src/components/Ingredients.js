import MaterialTable from 'material-table'
import { useState } from 'react'
import Container from '@material-ui/core/Container'
import React, { useEffect } from 'react'

export default function Ingredients() {

    //Initiate State
    const [ingredients, setIngredients] = useState([])
    const [foodGroups, setFoodGroups] = useState({})

    var columns = [
        { title: 'Ingredient', field: 'name' },
        { title: 'id', field: 'ingredientID', hidden: true },
        { title: 'Food Group', field: 'FoodGroups.name', lookup: foodGroups },
    ]


    // convert array of table rows to object for lookup - {foodGroupID:name}
    function arrayToObject(arr) {
        let foodGroups = {}
        for (let i = 0; i < arr.length; ++i)
            foodGroups[arr[i].name] = arr[i].name
        return foodGroups
    }

    /*fetch ingredients on load*/
    useEffect(() => {

        /*load the user's database info*/
        fetch('/ingredients')
            .then(res => res.json())
            .then(res => setIngredients([...res]))

        //load the foodGroups
        fetch('/food_group')
            .then((res) => res.json())
            .then((res) => setFoodGroups(arrayToObject(res)))
        //.then(res => setFoodGroups([...res]))
    }, [])



    const handleRowAdd = (newData, resolve) => {
        let dataToAdd = [...ingredients]
        dataToAdd.push(newData)
        setIngredients(dataToAdd)
        resolve()
    }

    const handleRowUpdate = (newData, oldData, resolve) => {
        const dataUpdate = [...ingredients]
        const index = oldData.tableData.id
        dataUpdate[index] = newData
        setIngredients([...dataUpdate])
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

        const dataDelete = [...ingredients]
        const index = oldData.tableData.id
        dataDelete.splice(index, 1)
        setIngredients([...dataDelete])
        resolve()
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
