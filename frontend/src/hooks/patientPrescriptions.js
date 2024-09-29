import { useState, useEffect } from 'react';
import supabase from '../supabaseClient';

const usePrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('prescriptions')
          .select(`
            id,
            patient_id,
            doctors(name), 
            pill_id,
            pills(pill_name, dosage),
            patients(first_name, last_name)
          `)
          .order('id', { ascending: true });

        if (error) throw error;

        setPrescriptions(data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  return { prescriptions, loading, error };
};

export default usePrescriptions;
