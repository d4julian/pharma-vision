import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode'; // The custom hook
import Dashboard from './Dashboard';
import DoctorDashboard from './pages/Doctor';
import PharmacistDashboard from './pages/Pharmacist';
import Patient from './pages/Patient';
import AppTheme from './shared-theme/AppTheme';
import SignInSide from './components/sign-in-side/SignInSide'; // Login page
import SignUpCard from './components/sign-in-side/SignUpCard'; // Signup page

function App() {
  const [mode, toggleColorMode] = useDarkMode();

  return (
    <AppTheme>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/pharmacist" element={<PharmacistDashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/login" element={<SignInSide />} /> {/* Login route */}
          <Route path="/signup" element={<SignUpCard />} /> {/* Signup route */}
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;
