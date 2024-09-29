// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import usePrescriptions from "../hooks/prescriptionData"; // Adjust the path as necessary

// export default function PrescriptionDataList() {
//   const { prescriptions, loading, error } = usePrescriptions();

//   const columns = [
//     { field: "id", headerName: "Unique ID", width: 150 },
//     { field: "patient_id", headerName: "Patient ID", width: 90 },
//     { field: "pill_id", headerName: "Pill ID", width: 150 },
//     { field: "doctor_id", headerName: "Doctor", width: 100 }
//   ];

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <DataGrid
//       autoHeight
//       checkboxSelection
//       rows={prescriptions}
//       columns={columns}
//       getRowClassName={(params) =>
//         params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
//       }
//       initialState={{
//         pagination: { paginationModel: { pageSize: 20 } },
//       }}
//       pageSizeOptions={[10, 20, 50]}
//       disableColumnResize
//       density="compact"
//     />
//   );
// }