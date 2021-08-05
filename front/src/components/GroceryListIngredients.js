import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export default function GroceryListIngredients() {
    var GroceryListColumns = [
        { title: 'id', field: 'listID', hidden: true },
        {
            title: 'Username',
            field: 'username',
        },
        { title: 'Date', field: 'listDate', type: 'date' },
    ]

    // the list of all user grocery lists
    const [GroceryListData, setGroceryListData] = useState([])

    // the currently selected list
    const [selectedList, setSelectedList] = useState()

    // the set of possible incredients
    const [ingredients, setIngredients] = useState([])

    // convert array of table rows to object for foodGroup selector - {name:name}
    function arrayToObject(arr) {
        let ingredients = {}
        arr.forEach((row) => {
            ingredients[row.name] = row.name
        })
        return ingredients
    }

    var columns = [
        // Primary key actually isn't a single id - need to consider this more
        { title: 'id', field: 'id', hidden: true },
        {
            title: 'Ingredient',
            field: 'name',
            lookup: ingredients,
        },
    ]
    /*fetch grocery_lists on load*/
    useEffect(() => {

        /*load the user's database info*/
        fetch('/grocery_lists')
            .then((res) => res.json())
            .then((res) => setGroceryListData(res))

        // Load potential ingredients to be added
        fetch('/ingredients')
            .then((res) => res.json())
            .then((res) => setIngredients(arrayToObject(res)))
    }, [])

    const [data, setData] = useState([])

    const handleRowAdd = (newData, resolve) => {
        fetch(`/grocery_list_ingredients/${selectedList}`, {
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
            .then((updatedList) => {
                console.log("update successful")
                setData([...updatedList])
                resolve()
            })
            .catch((error) => {
                console.log('Error:', error)
                resolve()
            })
    }

    const handleRowDelete = (oldData, resolve) => {
        const dataDelete = [...data]
        const index = oldData.tableData.id
        dataDelete.splice(index, 1)
        setData([...dataDelete])
        resolve()
    }

    const loadUserGroceryList = (rowData) => {
        fetch(`/grocery_list_ingredients/${rowData.listID}`)
            .then((res) => res.json())
            .then((res) => setData([...res]))
            .then(() => {
                setSelectedList(rowData.listID)
                console.log(selectedList)
            })
    }

    return (
        <div>
            <Container>
                <h6
                    class='MuiTypography-h6'
                    style={{
                        marginTop: 0,
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                    }}
                >
                    Select a Grocery List to View Its Ingredients
                </h6>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <MaterialTable
                            title='Select a Grocery List'
                            columns={GroceryListColumns}
                            data={GroceryListData}
                            actions={[
                                {
                                    icon: '>',
                                    onClick: (event, rowData) => {
                                        loadUserGroceryList(rowData)
                                    },
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <MaterialTable
                            title='Selected List'
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
