// src/components/CustomizedDataGrid.js
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import usePatients from '../hooks/patientData'; // Adjust the path as necessary

export default function CustomizedDataGrid() {
  const { patients, loading, error } = usePatients();

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'doctor_id', headerName: 'Doctor ID', width: 120 },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <DataGrid
      autoHeight
      checkboxSelection
      rows={patients}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
    />
  );
}
