// PrescriptionDataList.js
import React from 'react';
import usePrescriptions from '../hooks/patientPrescriptions';
import { DataGrid } from '@mui/x-data-grid';

const PrescriptionDataList = () => {
  const { prescriptions, loading, error } = usePrescriptions();

  const columns = [
    { field: 'first_name', headerName: 'First Name', width: 130 },
    { field: 'last_name', headerName: 'Last Name', width: 130 },
    { field: 'pill_name', headerName: 'Pill Name', width: 130 },
    { field: 'dosage', headerName: 'Pill Dosage', width: 130 },
    { field: 'name', headerName: 'Doctor Name', width: 150 },
  ];

  // Map over the prescriptions to construct the rows for the DataGrid
  const rows = prescriptions.map((prescription) => ({
    id: prescription.id, // Ensure this is unique
    first_name: prescription.patients?.first_name || 'N/A', // Use optional chaining to avoid errors
    last_name: prescription.patients?.last_name || 'N/A', // Use optional chaining to avoid errors
    pill_name: prescription.pills?.pill_name || 'N/A', // Use optional chaining to avoid errors
    dosage: prescription.pills?.dosage || 'N/A', // Use optional chaining to avoid errors
    name: prescription.doctors?.name || 'N/A',
  }));

  if (loading) return <div>Loading...</div>;

  // Update error rendering to display the error message correctly
  if (error) return <div>Error: {error.message || 'An error occurred'}</div>;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default PrescriptionDataList;
