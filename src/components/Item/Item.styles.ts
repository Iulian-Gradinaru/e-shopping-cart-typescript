// /**
//  * Imports styled
//  */
import { styled } from '@mui/system';

// export const Container = styled('div')({
//   borderRadius: '15px',
//   width: '30%',
//   margin: '15px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   '&:hover': {
//     transition: '0.3s ease-in',
//     transform: 'scale(1.1)', // Scalează imaginea la 110% când se face hover.
//     cursor: 'pointer',
//   },
// });

export const Container = styled('div')(({ theme }) => {
  return {
    borderRadius: '15px',
    width: '30%',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      transition: '0.3s ease-in',
      transform: 'scale(1.1)', // Scalează imaginea la 110% când se face hover.
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
      borderRadius: '25px',
      marginLeft: 35,
      marginBottom: 5,
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {},
  };
});

// export const Image = styled('img')({
//   width: 200,
//   transition: 'transform 0.3s ease-in',
//   '&:hover': {
//     transform: 'scale(1.1)',
//     cursor: 'pointer',
//   },
// });

export const Image = styled('img')(({ theme }) => {
  return {
    width: 200,
    transition: 'transform 0.3s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
    [theme.breakpoints.down('md')]: {},
  };
});

export const Descriptions = styled('div')({
  textAlign: 'center',
});

// export const AddToCartButton = styled('button')({
//   backgroundColor: 'transparent',
//   border: '2px solid rgb(19, 19, 19)',
//   minWidth: '100px',
//   paddingLeft: '10px',
//   paddingRight: '10px',
//   paddingTop: '5px',
//   paddingBottom: '5px',
//   borderRadius: '15px',
//   '&:hover': {
//     backgroundColor: 'rgb(19, 19, 19)',
//     color: 'white',
//     cursor: 'pointer',
//   },
// });

export const AddToCartButton = styled('button')(({ theme }) => {
  return {
    backgroundColor: 'transparent',
    border: '2px solid rgb(19, 19, 19)',
    minWidth: '100px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderRadius: '15px',
    '&:hover': {
      backgroundColor: 'rgb(19, 19, 19)',
      color: 'white',
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      margin: 10,
    },
    [theme.breakpoints.down('md')]: {},
  };
});
