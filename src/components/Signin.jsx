import React from 'react'
import Stack from '@mui/material/Stack';
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';


const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}
const Signin = () => {
  return (
    <Stack>
      <GoogleButton onClick={googleSignIn}/>
    </Stack>
  )
}

export default Signin
