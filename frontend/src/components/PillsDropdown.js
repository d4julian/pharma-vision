import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import supabase from '../supabaseClient'; // Import your Supabase client
import emitter from '../emitter'; // Import emitter for event handling

const PillsDropdown = ( {onPillSelect} ) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPill, setSelectedPill] = useState('');
  const [patient, setPatient] = useState(null); // State to hold the selected patient

  // Listen for patient selection via the emitter
  useEffect(() => {
    const patientListener = (selectedPatient) => {
      setPatient(selectedPatient); // Update patient state when a patient is selected
    };

    emitter.on('patientSelected', patientListener);

    return () => {
      emitter.off('patientSelected', patientListener); // Clean up listener on component unmount
    };
  }, []);

  // Fetch prescriptions based on the selected patient
  useEffect(() => {
    const fetchPrescriptions = async () => {
      if (!patient || !patient.id) {
        console.log('No patient selected or patient ID is missing');
        return; // If no patient or no patient ID, do nothing
      }

      setLoading(true);
      try {
        // Step 1: Fetch the pill_id(s) from the prescriptions table based on patient_id
        const { data: prescriptionData, error: prescriptionError } = await supabase
          .from('prescriptions')
          .select('pill_id')
          .eq('patient_id', patient.id);

        if (prescriptionError) throw prescriptionError;

        if (prescriptionData.length === 0) {
          setPrescriptions([]); // No prescriptions found for this patient
          setLoading(false);
          return;
        }

        // Step 2: Fetch the pill_name from the pills table based on pill_id(s)
        const pillIds = prescriptionData.map(prescription => prescription.pill_id);
        const { data: pillData, error: pillError } = await supabase
          .from('pills')
          .select('pill_name')
          .eq('id', pillIds); // Fetch pill names matching the pill IDs

        if (pillError) throw pillError;

        setPrescriptions(pillData); // Set the fetched pill names
      } catch (err) {
        console.error('Error fetching prescriptions:', err);
        setError('Error fetching prescriptions');
      } finally {
        setLoading(false); // Ensure loading is turned off
      }
    };

    fetchPrescriptions(); // Fetch prescriptions when patient changes
  }, [patient]);

  const handlePillSelect = (event) => {
    const selected = event.target.value;
    setSelectedPill(selected);
    onPillSelect(selected); // Call the callback and pass the selected pill to the parent
  };

  // Show loading state
  if (loading) return <CircularProgress />;

  // Show error if there's any issue with the query
  if (error) return <div>{error}</div>;

  // Render the pills dropdown
  return (
    <FormControl fullWidth>
      <InputLabel id="pills-dropdown-label">Select Pill</InputLabel>
      <Select
        labelId="pills-dropdown-label"
        id="pills-dropdown"
        value={selectedPill}
        label="Select Pill"
        onChange={handlePillSelect} // Handle pill selection
      >
        {prescriptions.length > 0 ? (
          prescriptions.map((pill, index) => (
            <MenuItem key={index} value={pill.pill_name}>
              {pill.pill_name}
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
