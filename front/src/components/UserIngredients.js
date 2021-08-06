import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import UserSelector from './UserSelector'

export default function UserIngredients() {
    // State for the Users
    const [users, setUsers] = useState([])

    // State for user selector
    const [selectedUser, setSelectedUser] = useState('')

    // State for UserIngredients
    const [data, setData] = useState([])

    // State for ingredient selector
    const [ingredients, setIngredients] = useState({})

    // State for object used for name -> ID conversion
    const [ingredientToID, setIngredientToID] = useState({})

    var columns = [
        { title: 'id', field: 'id', hidden: true },
        { title: 'Ingredient', field: 'name', lookup: ingredients },
    ]

    // convert array of table rows to object for ingredient selector - {name:name}
    function arrayToObject(arr) {
        let ingredients = {}
        arr.forEach((row) => {
            ingredients[row.name] = row.name
        })
        return ingredients
    }

    // create the object used for converting a selected ingredient name to an ID
    function createIngredientToID(arr) {
        let ingredientToID = {}
        arr.forEach((row) => {
            ingredientToID[row.name] = row.ingredientID
        })
        return ingredientToID
    }

    useEffect(() => {
        // only get ingredients if a user is selected
        if (selectedUser !== '') {
            fetch(`/user_ingredients/${selectedUser}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Status code: ${response.status}`)
                    }
                    return response.json()
                })
                .then((userIngredients) => setData(userIngredients))
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [selectedUser]) // fetch every time selectedUser changes

    // fetch data from db on component load
    useEffect(() => {
        // user data for user selector
        fetch('/users')
            .then((res) => res.json())
            .then((res) => setUsers(res))

        // ingredient data for ingredient selector
        // and for IngredientToID object
        fetch('/ingredients')
            .then((res) => res.json())
            .then((res) => {
                setIngredients(arrayToObject(res))
                setIngredientToID(createIngredientToID(res))
            })
    }, [])

    const handleRowAdd = (newData, resolve) => {
        // newData can't be sent as is because it has the ingredient name
        // the back-end expects the ingredientID
        let ingredientToAdd = { ingredientID: ingredientToID[newData.name] }
        fetch(`/user_ingredients/${selectedUser}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredientToAdd),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Status code: ${response.status}`)
                }
                return response.json()
            })
            .then((userIngredients) => {
                console.log('Success:', userIngredients)
                // update the table in the front-end
                setData(userIngredients)
                resolve()
            })
            .catch((error) => {
                console.log(error)
                resolve()
            })
    }

    const handleRowDelete = (oldData, resolve) => {
        let ingredientToDelete = { ingredientID: ingredientToID[oldData.name] }
        fetch(`/user_ingredients/${selectedUser}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredientToDelete),
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
                <h6
                    class='MuiTypography-h6'
                    style={{ margin: 0, textAlign: 'center' }}
                >
                    Select a User to View Their Ingredients
                </h6>

                {/* User Selector */}
                <UserSelector
                    users={users}
                    setUsers={setUsers}
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                />

                <br></br>

                {/* Table Elements */}
                <MaterialTable
                    title='User Ingredients'
                    columns={columns}
                    data={data}
                    editable={{
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
