import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import AddForm from './AddForm.js'

const rows: GridRowsProp = [
  {id: 1,  email: 'John@doe.com', username: 'john_doe' },
  {id: 2,  email: 'JANE@doe.com', username: 'jane_doe' },
  {id: 3,  email: 'John@doe.com', username: 'john_doe' },
  {id: 4,  email: 'JANE@doe.com', username: 'jane_doe' },
  {id: 5,  email: 'John@doe.com', username: 'john_doe' },
  {id: 6,  email: 'JANE@doe.com', username: 'jane_doe' },
];

const columns: GridColDef[] = [
  {field: 'email', headerName: 'Email', width: 150 },
  {field: 'username', headerName: 'Username', width: 150 },
];


export default function Users() {
  return (
    <div>
  
    <AddForm />

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