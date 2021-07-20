import MaterialTable from 'material-table'
import { useState } from 'react'
import { forwardRef } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

export default function GroceryListIngredient() {
  var GroceryListColumns = [
    { title: 'id', field: 'id', hidden: true },
    {
      title: 'Username',
      field: 'username',
      lookup: { john_doe: 'john_doe', jane_doe: 'jane_doe' },
    },
    { title: 'Date', field: 'date', type: 'date' },
  ]

  const [GroceryListData, setGroceryListData] = useState([
    { id: 1, username: 'john_doe', date: '12/2/2012' },
    { id: 2, username: 'jane_doe', date: '9/9/1999' },
  ])

  var columns = [
    // Primary key actually isn't a single id - need to consider this more
    { title: 'id', field: 'id', hidden: true },
    {
      title: 'Ingredient',
      field: 'name',
      lookup: { Carrots: 'Carrots', Cilantro: 'Cilantro', Milk: 'Milk' },
    },
  ]

  const [data, setData] = useState([
    { id: 1, name: 'Carrots' },
    { id: 2, name: 'Cilantro' },
  ])

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

  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <MaterialTable
              title='Select a Grocery List'
              columns={GroceryListColumns}
              data={GroceryListData}
              icons={tableIcons}
              actions={[
                {
                  icon: '>',
                  onClick: (event, rowData) => {
                    // Get ingredients for other table based on chosen list
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
              icons={tableIcons}
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
