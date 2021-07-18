import { DataGrid } from '@material-ui/data-grid';

const rows: GridRowsProp = [
  {id: 1,  first_name: 'John', last_name: 'Doe' }
];

const columns: GridColDef[] = {
  {field: 'first_name', headerName: 'First Name', width: 150 },
  {field: 'last_name', headerName: 'Last Name', width: 150 },
};

export default function Users() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}