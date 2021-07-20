import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import SearchForm from './SearchForm.js'
import AddForm from './AddIngredientForm'

const rows: GridRowsProp = [
  {id: 1,  name: 'Carrots', foodGroupID: '7' },
  {id: 2,  name: 'Cilantro', foodGroupID: '7' },
  {id: 3,  name: 'Milk', foodGroupID: '2' },

];

const columns: GridColDef[] = [
  {field: 'name', headerName: 'Name', width: 150 },
  {field: 'foodGroupID', headerName: 'Food Group (ID)', width: 300 },
];


export default function Ingredients() {
  return (
    <div>
    <AddForm />
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
    <Button variant="contained" color="secondary">
      Delete
    </Button>
    </div>
  );
}