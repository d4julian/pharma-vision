import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode'; // The custom hook
import Dashboard from './Dashboard';
import DoctorDashboard from './pages/Doctor';
import PharmacistDashboard from './pages/Pharmacist';
// import Patient from './pages/Patient';
import AppTheme from './shared-theme/AppTheme';

function App() {
  const [mode, toggleColorMode] = useDarkMode();

  return (
    <AppTheme mode={mode}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/pharmacist" element={<PharmacistDashboard />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;
