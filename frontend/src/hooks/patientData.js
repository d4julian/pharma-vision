import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const usePatients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPatients = async () => {
    try {
      setLoading(true); // Set loading to true
      const { data, error } = await supabase
        .from('patients')
        .select('*');

      if (error) throw error; // Throw error to catch block

      const sortedData = data.sort((a, b) => a.last_name.localeCompare(b.last_name));
      setPatients(sortedData);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setError(error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    fetchPatients(); // Call fetch on mount
  }, []);

  return { patients, loading, error };
};

export default usePatients;
