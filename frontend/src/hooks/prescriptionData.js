import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const usePrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPrescriptions = async () => {
    try {
      setLoading(true); // Set loading to true
      const { data, error } = await supabase
        .from('prescriptions') // Query from the 'prescriptions' table
        .select('*');

      if (error) throw error; // Throw error to catch block

      setPrescriptions(data); // Directly set the fetched data
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
      setError(error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    fetchPrescriptions(); // Call fetch on mount
  }, []);

  return { prescriptions, loading, error };
};

export default usePrescriptions;
