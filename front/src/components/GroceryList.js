import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import SearchForm from './SearchForm.js'
import AddForm from './AddForm'

const rows: GridRowsProp = [
  {id: 1,  date: '12-2-2012' },
  {id: 2,  date: '1-14-1091' },
  {id: 3,  date: '9-9-1999'},

];

const columns: GridColDef[] = [
  {field: 'date', headerName: 'Date', width: 150 },
];


export default function GroceryList() {
  return (
    <div>
    <AddForm to_add="GroceryList" in1="Date"/>
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
    <Button variant="contained" color="secondary">
      Delete
    </Button>
    </div>
  );
}