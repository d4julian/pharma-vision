import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import usePrescriptions from "../hooks/patientPrescriptions"; // Adjust the path as necessary

export default function PrescriptionDataList() {
  const { prescriptions, loading, error } = usePrescriptions();

  const columns = [
    { field: "patient_id", headerName: "Patient ID", width: 90 },
    { field: "patient_name", headerName: "Patient Name", width: 150 }, // Added Patient Name
    { field: "pill_name", headerName: "Pill Name", width: 150 }, // Added Pill Name
    { field: "dosage", headerName: "Dosage", width: 100 }, // Added Dosage
    { field: "doctor_name", headerName: "Doctor Name", width: 150 }, // Added Doctor Name
  ];

  // Map prescriptions to the structure expected by the DataGrid
  const rows = prescriptions.map((prescription, index) => ({
    id: prescription.id || index, // Ensure a unique 'id' field
    patient_id: prescription.patient_id,
    patient_name: `${prescription.patients.first_name} ${prescription.patients.last_name}`, // Full patient name
    pill_name: prescription.pills.pill_name,
    dosage: prescription.pills.dosage,
    doctor_name: prescription.doctors.name, // Doctor name from the nested doctors table
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>; // Directly display error as a string

  return (
    <DataGrid
      autoHeight
      rows={rows} // Pass the modified rows with the necessary data
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
    />
  );
}
