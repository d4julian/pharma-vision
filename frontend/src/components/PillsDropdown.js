import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import supabase from '../supabaseClient';

const PillsDropdown = ({ patientId }) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPill, setSelectedPill] = useState(''); // Track selected pill

  useEffect(() => {
    const fetchPrescriptions = async () => {
      if (!patientId) return; // If no patient ID, do nothing

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('prescriptions')
          .select('prescription_name')
          .eq('patient_id', patientId); // Filter by patient_id

        if (error) throw error; // Handle the error

        setPrescriptions(data);
      } catch (err) {
        console.error('Error fetching prescriptions:', err);
        setError(err);
      } finally {
        setLoading(false); // Ensure loading is turned off
      }
    };

    fetchPrescriptions(); // Fetch when patientId changes
  }, [patientId]);

  if (loading) return <CircularProgress />; // Show loading state

  if (error) return <div>Error loading prescriptions</div>; // Show error

  return (
    <FormControl fullWidth>
      <InputLabel id="pills-dropdown-label">Select Pill</InputLabel>
      <Select
        labelId="pills-dropdown-label"
        id="pills-dropdown"
        value={selectedPill}
        label="Select Pill"
        onChange={(event) => setSelectedPill(event.target.value)} // Handle pill selection
      >
        {prescriptions.length > 0 ? (
          prescriptions.map((prescription, index) => (
            <MenuItem key={index} value={prescription.prescription_name}>
              {prescription.prescription_name}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="" disabled>No prescriptions available</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default PillsDropdown;
