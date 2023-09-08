// import { styled } from '@mui/system';

// export const CreditCard = styled('div')(({ theme }) => ({
//   width: '360px',
//   height: '300px',
//   borderRadius: '12px',
//   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//   padding: '8px',
//   flexDirection: 'column',
//   alignItems: 'center',
//   backgroundColor: '#005f81',
//   [theme.breakpoints.down('sm')]: {
//     // Adăugați stiluri pentru ecranele mai mici aici, dacă este necesar.
//   },
//   [theme.breakpoints.down('md')]: {
//     // Adăugați stiluri pentru ecranele de dimensiuni medii aici, dacă este necesar.
//   },
// }));

// export const CreditCardChip = styled('div')(({ theme }) => ({
//   width: '48px',
//   height: '32px',
//   backgroundImage: 'url(path_to_chip_image.png)',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   marginBottom: '16px',
//   [theme.breakpoints.down('sm')]: {
//     // Adăugați stiluri pentru ecranele mai mici aici, dacă este necesar.
//   },
//   [theme.breakpoints.down('md')]: {
//     // Adăugați stiluri pentru ecranele de dimensiuni medii aici, dacă este necesar.
//   },
// }));

// export const InputField = styled('input')({
//   width: '100%',
//   border: 'none',
//   borderBottom: '2px solid #000',
//   marginBottom: '16px',
//   padding: '8px',
//   fontSize: '16px',
//   outline: 'none',
//   transition: 'border-bottom-color 0.2s',
//   '&::placeholder': {
//     color: '#999',
//   },
//   '&:focus': {
//     borderBottomColor: '#007bff',
//   },
// });

// export const CreditCardInfo = styled('div')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   gap: '16px',
// });

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const PaymentFormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  maxWidth: '400px',
  margin: '0 auto',
  padding: 22,
  borderRadius: 17,
  marginTop: 33,
  backgroundColor: '#c1c9e980',
  boxShadow: ' 0px 3px 15px rgba(0, 0, 0, 0.2)',
  marginBottom: 20,
});

export const ExpirationCvcContainer = styled('div')({
  display: 'flex',
  gap: '16px',
});

export const StyledCreditCardInput = styled(TextField)({
  width: '100%',
  backgroundColor: 'white',
});

export const SubmitButton = styled(Button)({
  backgroundColor: '#007bff',
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
});
