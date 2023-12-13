import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import { auth } from '../firebase'; 

const StyledMessageBubble = styled(Paper)(({ theme, sent }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  maxWidth: '80%',
  marginLeft: sent ? 'auto' : null,
  backgroundColor: sent ? 'white' : '#333', 
  borderRadius: '10px',
  color: sent ? 'black' : 'white', 
  textAlign: sent ? 'right' : 'left',
}));

const Message = ({ message }) => {
  const theme = useTheme();
  const currentUserUID = auth.currentUser?.uid;
  const sent = message.uid === currentUserUID;

  return (
    <StyledMessageBubble theme={theme} sent={sent}>
      <Typography color={sent ? "text.primary" : "grey.300"} fontSize="0.75rem" mb="0.4rem">
        {message.senderName || message.name || "Default Sender"}
      </Typography>
      <Typography variant="body1" color={sent ? "text.primary" : "grey.300"}>
        {message.text}
      </Typography>
    </StyledMessageBubble>
  );
};

export default Message;
