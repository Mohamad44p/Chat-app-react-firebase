import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export const StyledStack = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(to right bottom, #ff758c, #ff7eb3)',
});

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '20px',
  boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
  width: '600px',
});

export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'purple',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'purple',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'purple',
    },
  },
  '& .MuiInputBase-input': {
    color: 'black',
  },
  '& .MuiInputLabel-root': {
    color: 'grey',
  },
  marginBottom: '20px',
  width: '100%',
});

export const StyledButton = styled(Button)({
  background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
  color: 'white',
  width: '100%',
  padding: '10px 0',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
  '&:hover': {
    background: 'linear-gradient(to right, #2575fc 0%, #6a11cb 100%)',
  },
});

