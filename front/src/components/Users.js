import { DataGrid } from '@material-ui/data-grid';

const rows: GridRowsProp = [
  {id: 1,  email: 'John@doe.com', username: 'john_doe' }
];

const columns: GridColDef[] = [
  {field: 'email', headerName: 'Email', width: 150 },
  {field: 'username', headerName: 'Username', width: 150 },
];

export default function Users() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}