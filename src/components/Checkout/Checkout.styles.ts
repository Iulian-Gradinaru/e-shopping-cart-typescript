import { Button, Typography, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
});

export const FormTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'center',
});

export const FormSectionShiping = styled('div')({
  marginBottom: '16px',
  backgroundColor: '#c1c9e980',
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
  padding: 20,
  borderRadius: 20,
});
export const FormSectionBilling = styled('div')({
  marginBottom: '16px',
  backgroundColor: '#c1c9e980',
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
  padding: 20,
  borderRadius: 20,
});
export const FormSectionPayment = styled('div')({
  marginBottom: '16px',
  backgroundColor: '#c1c9e980',
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
  padding: 20,
  borderRadius: 20,
});
export const FormSectionComments = styled('div')({
  marginBottom: '16px',
  backgroundColor: '#c1c9e980',
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
  padding: 20,
  borderRadius: 20,
});

// export const SubmitButton = styled(Button)({
//   backgroundColor: '#007bff',
//   color: '#fff',
//   marginTop: '16px',
// });

export const SubmitButton = styled(Button)(() => ({
  backgroundColor: '#7493d0',
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '#1c2331',
  },
}));

export const CustomTextField = styled(TextField)({
  backgroundColor: '#fff',
});
