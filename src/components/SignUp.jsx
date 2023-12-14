import React, { useState } from 'react';
import { StyledStack, StyledForm, StyledTextField, StyledButton } from './SigninStyles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword , signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful sign-in.
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const emailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in with email and password', error.message);
    }
  };
  

  return (
    <StyledStack>
    <StyledForm onSubmit={emailSignIn}>
      <Typography variant="h4" sx={{ marginBottom: '2rem' }}>Sign up</Typography>
      
      <StyledTextField 
        label="Username" 
        variant="outlined"
      />
      <StyledTextField 
        label="Password" 
        type="password" 
        variant="outlined"
      />
      <StyledTextField 
        label="Email" 
        variant="outlined"
      />
      <StyledTextField 
        label="Phone no." 
        variant="outlined"
      />
      <StyledButton type="submit">
        Create account
      </StyledButton>

      <Typography sx={{ margin: '1rem 0' }}>Or sign up with</Typography>
      <Box>
        <IconButton onClick={signInWithGoogle}>
          <GoogleIcon sx={{ color: '#db4437' }} />
        </IconButton>
        <Typography sx={{ margin: '1rem 0' }}>
          Already have an account? <Link to="/signin" style={{ textDecoration: 'none', color: '#6a11cb' }}>Sign in</Link>
        </Typography>
      </Box>
    </StyledForm>
  </StyledStack>
  );
};

export default SignUp;
