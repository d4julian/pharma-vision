// src/components/CustomizedDataGrid.js
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import usePatients from '../hooks/patientData'; // Adjust the path as necessary

export default function PatientDataList({ searchTerm, onRowSelect }) {
  const { patients, loading, error } = usePatients();

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.1 },
    { field: 'last_name', headerName: 'Last Name', flex: 0.3 },
    { field: 'first_name', headerName: 'First Name', flex: 0.3 },
    { field: 'age', headerName: 'Age', flex: 0.2 },
  ];

  const filteredPatients = patients.filter((patient) => patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <DataGrid
      autoHeight
      rows={filteredPatients}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      onRowClick={(row) => onRowSelect(row.data)}
    />
  );
}
