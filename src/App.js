import React from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import SendMessage from './components/SendMessage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '90vh',
  backgroundColor: '#f5f5f5',
  marginTop: 30,
  boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  padding : 0,
  [theme.breakpoints.up('xs')]: {
    maxWidth: '400px',
    padding: 0,
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '728px',
    padding: 0,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '900px',
    padding: 0,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1200px',
    padding: 0,
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1500px',
    padding: 0,
  },
}));

function App() {
  const [user] = useAuthState(auth);

  return (
    <StyledContainer>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          flex: 1, 
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          overflow: 'hidden', 
        }}
      >
        <Chat />
        <SendMessage />
      </Box>
    </StyledContainer>
  );
}

export default App;
