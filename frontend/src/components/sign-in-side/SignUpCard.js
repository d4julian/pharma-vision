import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabaseClient'; // Adjust the path as necessary

export default function SignUpCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle user signup
  const handleSignUp = async (event) => {
    event.preventDefault();
    
    // Clear any existing errors before signup attempt
    setError('');

    try {
      // Sign up the user with email and password using Supabase
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        // Display error message if signup fails
        setError(error.message);
      } else {
        // Redirect to login page on successful signup
        navigate('/login');
      }
    } catch (err) {
      // Catch any other errors
      setError('An error occurred during sign-up.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignUp}
      sx={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto', gap: 2, mt: 4 }}
    >
      <Typography variant="h5">Sign Up</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />
      {/* Display error message if exists */}
      {error && <Typography color="error">{error}</Typography>}
      <Button type="submit" variant="contained" fullWidth>
        Create Account
      </Button>
    </Box>
  );
}
