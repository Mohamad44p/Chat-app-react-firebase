import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from './Logout';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#424242',
  color: 'white',
}));

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}> 
      <Typography variant="h3" fontSize={'2.5rem'} fontFamily={"Roboto"} sx={{ pl: 3, filter: 'drop-shadow(7px 7px 3px #000)' }}>
          Chat App
        </Typography>
        <Logout/>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;