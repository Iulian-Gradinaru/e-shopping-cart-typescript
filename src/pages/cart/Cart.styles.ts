import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CartContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CheckoutButton = styled('button')({
  width: '150px',
  height: '50px',
  backgroundColor: 'rgb(19, 19, 19)',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  margin: '10px',
  cursor: 'pointer',
});

export const CartMessage = styled('h1')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('md')]: {},
  };
});

export const ContainerChechout = styled('h1')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('md')]: {},
  };
});
