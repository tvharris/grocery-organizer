import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import SearchForm from './SearchForm.js'
import AddForm from './AddForm.js'

const rows: GridRowsProp = [
  {id: 1,  User_Name: 'Todd', Ingredient_Name: 'Cilantro' },
  {id: 2,  User_Name: 'User2', Ingredient_Name: 'Cardamom' },
  {id: 3,  User_Name: 'Mr. Sparkles', Ingredient_Name: 'Rose Water' },
];

const columns: GridColDef[] = [
  {field: 'User_Name', headerName: 'User Name', width: 150 },
  {field: 'Ingredient_Name', headerName: 'Ingredient Name', width: 150 },
];


export default function User_Ingredient() {
  return (
    <div>
    <AddForm to_add="User_Ingredient" in1="User Name" in2="Ingredient Name"/>

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