import React from 'react';
import Button from '@mui/material/Button';
import { auth } from '../firebase';

const Logout = () => {
  const handleSignOut = () => {
    try {
      auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="text"
      sx={{color: 'white', fontWeight: 'bold', fontSize: '1rem', filter: 'drop-shadow(7px 7px 3px #000)',}}>
      Logout
    </Button>
  );
};

export default Logout;