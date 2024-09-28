import * as React from 'react';
import PropTypes from 'prop-types';
import { useColorScheme } from '@mui/material/styles'; // Import useColorScheme hook

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import MenuButton from './MenuButton';

function ToggleColorMode({ ...props }) {
  const { mode, setMode } = useColorScheme(); // Use the hook to get and set the mode

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark')); // Toggle between 'dark' and 'light'
  };

  return (
    <MenuButton
      onClick={toggleColorMode} // Call the toggle function
      size="small"
      aria-label="button to toggle theme"
      {...props}
    >
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </MenuButton>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']),
  toggleColorMode: PropTypes.func, // No longer needed as a required prop
};

export default ToggleColorMode;
