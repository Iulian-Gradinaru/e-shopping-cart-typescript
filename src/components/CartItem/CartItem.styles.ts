import { styled } from '@mui/system';

export const CartItemContainer = styled('div')(({ theme }) => {
  return {
    width: '600px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '25px',
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
      width: '85%',
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      aligntems: 'center',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('md')]: {},
  };
});

export const Image = styled('img')({
  width: '200px',
  padding: '10px',
  transition: 'transform 0.3s ease-in',
  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer',
  },
});

export const Description = styled('div')(({ theme }) => {
  return {
    width: '100%',
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: 10,
      marginTop: -36,
    },
    [theme.breakpoints.down('md')]: {},
  };
});

export const InputHandler = styled('input')({
  width: '40px',
  textAlign: 'center',
  fontWeight: 'bolder',
});
