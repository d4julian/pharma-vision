// src/components/Search.js
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import useSearch from '../hooks/useSearch'; // Import the custom hook

export default function Search() {
  const { searchTerm, onSearch } = useSearch(); // Use the custom hook

  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
        onChange={handleChange}
      />
    </FormControl>
  );
}
