import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DoctorDataList from '../components/PatientDataList';

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Search Patients
      </Typography>
      <Grid container spacing={2} columns={1}>
        <Grid size={{ md: 12, lg: 9 }}>
          <DoctorDataList />
        </Grid>
      </Grid>
    </Box>
  );
}
