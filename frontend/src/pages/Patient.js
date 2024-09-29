import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideMenu from '../components/SideMenu'; // Sidebar for navigation
import Header from '../components/Header'; // Header component
import MainGrid from '../components/MainGrid'; // Main content grid for patient-specific data
import AppTheme from '../shared-theme/AppTheme'; // Assuming you have a shared theme

export default function Patient() {
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
                        <Header title="Patient Dashboard" />
                        {/* Main content grid where you can add patient-specific information */}
                        <MainGrid title="Search Medications" />
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}