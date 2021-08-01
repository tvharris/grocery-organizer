import MaterialTable from 'material-table'
import { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export default function GroceryListIngredient() {
    var GroceryListColumns = [
        { title: 'id', field: 'listID', hidden: true },
        {
            title: 'Username',
            field: 'username',
            // lookup: { john_doe: 'john_doe', jane_doe: 'jane_doe' },
        },
        { title: 'Date', field: 'listDate', type: 'date' },
    ]

    const [GroceryListData, setGroceryListData] = useState([])

    var columns = [
        // Primary key actually isn't a single id - need to consider this more
        { title: 'id', field: 'id', hidden: true },
        {
            title: 'Ingredient',
            field: 'name',
            //lookup: { Carrots: 'Carrots', Cilantro: 'Cilantro', Milk: 'Milk' },
        },
    ]
    /*fetch grocery_lists on load*/
    useEffect(() => {
        /*load the user's database info*/
        fetch('/grocery_lists')
            .then(res => res.json())
            .then(res =>
                setGroceryListData([...res])
            )
    }, [])

    const [data, setData] = useState([])

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
        const dataDelete = [...data]
        const index = oldData.tableData.id
        dataDelete.splice(index, 1)
        setData([...dataDelete])
        resolve()
    }

    const loadUserGroceryList = (rowData) => {
        console.log(rowData.listID)
        fetch(`/grocery_list_ingredients/${rowData.listID}`)
            .then(res => res.json())
            .then(res =>
                setData([...res])
            )
    };

    return (
        <div>
            <Container>
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
