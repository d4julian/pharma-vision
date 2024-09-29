import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideMenu from '../components/SideMenu'; // Sidebar for navigation
import Header from '../components/Header'; // Header component
import AppTheme from '../shared-theme/AppTheme'; // Assuming you have a shared theme
import WebcamCapture from '../WebcamCapture'; 
import PrescriptionDataList from '../components/PrescriptionDataList';
import PatientDataList from '../components/PatientDataList';
import PillsDropdown from '../components/PillsDropdown';
import Grid from '@mui/material/Grid'; // Import Grid for layout
import Button from '@mui/material/Button'; // Import the Button component


export default function PharmacistDashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [detections, setDetections] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <AppTheme>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* SideMenu component for the sidebar */}
        <SideMenu />
        {/* Main Content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'flex-start',
              mx: 3,
              pb: 10,
              mt: { xs: 8, md: 0 },
            }}
          >
            {/* Header component for the page title */}
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {/* Main content grid where you can add pharmacist-specific information */}
            { /* <WebcamCapture detections={detections} setDetections={setDetections} /> */ }
            How many pastillas: {detections.length}
            <Grid container spacing={1}>
              <Grid item xs={12} md={8}>
                {/* Main content grid where you can add pharmacist-specific information */}
                <PatientDataList searchTerm={searchTerm} />
              </Grid>
              <Grid item xs={12} md={4}>
                <PillsDropdown />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert('Mama guebo')}
                    sx={{
                        width: '100%', 
                        mt: 2// Makes the button span 100% of its parent width
                      }}
                  >Scan Pills</Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}