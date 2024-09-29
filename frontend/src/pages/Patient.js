import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideMenu from '../components/SideMenu'; // Sidebar for navigation
import Header from '../components/Header'; // Header component
import AppTheme from '../shared-theme/AppTheme'; // Assuming you have a shared theme
import PrescriptionDataList from '../components/PrescriptionDataList';

export default function Patient() {
    const [searchTerm, setSearchTerm] = useState('');
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
                        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        {/* Main content grid where you can add patient-specific information */}
                        <PrescriptionDataList searchTerm={searchTerm} title="Search Medications" pageSize={5}/>
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}