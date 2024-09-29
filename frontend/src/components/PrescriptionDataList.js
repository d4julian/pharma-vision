// PrescriptionDataList.js
import React from 'react';
import usePrescriptions from '../hooks/patientPrescriptions';
import { DataGrid } from '@mui/x-data-grid';

const PrescriptionDataList = ({ searchTerm }) => {
  const { prescriptions, loading, error } = usePrescriptions();

  const columns = [
    { field: "id", headerName: "Unique ID", width: 150 },
    { field: "patient_id", headerName: "Patient ID", width: 90 },
    { field: "pill_id", headerName: "Pill ID", width: 150 },
    { field: "doctor_id", headerName: "Doctor", width: 100 }
  ];

  const filteredPrescriptions = prescriptions.filter((prescription) => prescription.pills.pill_name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Map over the prescriptions to construct the rows for the DataGrid
  const rows = filteredPrescriptions.map((prescription) => ({
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
