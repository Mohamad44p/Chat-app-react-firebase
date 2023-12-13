import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto', 
  padding: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1, 
  marginRight: theme.spacing(1),
  backgroundColor: '#1a202c',
  '& .MuiOutlinedInput-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#38a169',
  '&:hover': {
    backgroundColor: '#2f855a',
  },
}));

const SendMessage = () => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert('Please enter a valid message');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    try {
      await addDoc(collection(db, 'messages'), {
        text: input.trim(),
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
      setInput(''); 
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        placeholder="Message"
      />
      <StyledButton variant="contained" type="submit">
        Send
      </StyledButton>
    </StyledForm>
  );
};

export default SendMessage;
