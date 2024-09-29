import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Search({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <FormControl sx={{ width: { xs: '100%', md: '100ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        value={searchTerm} // Bind the input value to searchTerm
        onChange={handleSearchChange} // Update the search term on input change
        sx={{
          '&::placeholder': {
            color: 'rgba(255, 255, 255, 1.0)', // Make the placeholder white with some opacity
          },
          input: {
            color: 'white', // Also make the typed text white
          },
          height: '50px', // Adjust the height if needed
          '& .MuiOutlinedInput-input': {
            padding: '14px', // Adjust the padding inside the input field for text
          },
        }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}
