import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import SearchForm from './SearchForm.js'
import AddForm from './AddForm.js'

const rows: GridRowsProp = [
  {id: 1,  GroceryList_Date: '12-11-2021', Ingredient_Name: 'Cilantro' },
  {id: 2,  GroceryList_Date: '06-05-2020', Ingredient_Name: 'Cardamom' },
  {id: 3,  GroceryList_Date: '09-09-1966', Ingredient_Name: 'Rose Water' },
];

const columns: GridColDef[] = [
  {field: 'GroceryList_Date', headerName: 'List Date', width: 150 },
  {field: 'Ingredient_Name', headerName: 'Ingredient Name', width: 150 },
];


export default function GroceryList_Ingredient() {
  return (
    <div>
    <AddForm to_add="GroceryList Ingredient" in1="GroceryList_Date" in2="Ingredient Name"/>

    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
      <Button variant="contained" color="primary">
      Update
    </Button>
    <Button variant="contained" color="secondary">
      Delete
    </Button>
    </div>
  );
}