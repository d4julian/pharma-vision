import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PatientDataList from '../components/PatientDataList';

export default function MainDoctorGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Search Patients
      </Typography>
      <PatientDataList />
    </Box>
  );
}
