import { Button } from '@mui/material';
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
    backgroundColor: '#c1c9e980',
    // marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      width: '85%',
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      aligntems: 'center',
      flexDirection: 'column',
      marginTop: 30,
    },
    [theme.breakpoints.down('md')]: {},
  };
});

export const Image = styled('img')(({ theme }) => ({
  width: '260px',
  padding: '10px',
  transition: 'transform 0.3s ease-in',
  margin: 10,
  borderRadius: 20,

  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer',
    borderRadius: 20,
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

export const ProductName = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 10,

    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      padding: 10,
    },
  };
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

export const Price = styled('p')({
  marginTop: 8,
  marginBottom: -23,
});
export const Discount = styled('p')({
  marginBottom: 0,
  textDecoration: 'line-through',
});

export const CountHandler = styled('div')(({ theme }) => {
  return {
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
    },
  };
});

export const StylesButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#7493d0',
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',
  height: 20,
  marginTop: 4,

  '&:hover': {
    backgroundColor: '#1c2331',
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: 8,
  },
}));

export const StylesParagraph = styled('p')(({ theme }) => {
  return {
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: 23,
    color: 'red',
    [theme.breakpoints.down('sm')]: {},
  };
});

export const InputHandler = styled('input')(({ theme }) => {
  return {
    width: 60,
    height: 20,
    textAlign: 'center',
    fontWeight: 'bolder',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 11,

    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
    },
  };
});
