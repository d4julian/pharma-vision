import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PatientDataList from "../components/PatientDataList";
import ChartUserByCountry from "../components/ChartUserByCountry";
export default function MainDoctorGrid({ searchTerm }) {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Search Patients
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Patient Data List */}
        <Box sx={{ flexGrow: 1 }}>
          <PatientDataList searchTerm={searchTerm} />
        </Box>

        {/* Gauge Component */}
        <Box sx={{ minWidth: "300px", display: "flex", alignItems: "center" }}>
          <ChartUserByCountry />
        </Box>
      </Box>
    </Box>
  );
}
