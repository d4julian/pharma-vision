import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideMenu from '../components/SideMenu'; // Sidebar for navigation
import Header from '../components/Header'; // Header component
import AppTheme from '../shared-theme/AppTheme'; // Assuming you have a shared theme
import WebcamCapture from '../WebcamCapture'; 
import PrescriptionDataList from '../components/PrescriptionDataList';

export default function PharmacistDashboard() {
    const [detections, setDetections] = useState([]);
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
              alignItems: 'center',
              mx: 3,
              pb: 10,
              mt: { xs: 8, md: 0 },
            }}
          >
            {/* Header component for the page title */}
            <Header title="Pharmacist Dashboard" />
            {/* Main content grid where you can add pharmacist-specific information */}
            <WebcamCapture detections={detections} setDetections={setDetections}/>
            How many pastillas: {detections.length}
            <PrescriptionDataList />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}