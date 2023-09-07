import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const ShopContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const ShopTitle = styled('div')({
  textAlign: 'center',
  fontSize: '40px',
});

export const ProductsGrid = styled('div')(({ theme }) => {
  return {
    margin: 40,
    width: '100%',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    placeItems: 'center',
    gap: 20,
    [theme.breakpoints.down('md')]: {
      paddingRight: 20,
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down('sm')]: {
      // paddingRight: 20,
      gridTemplateColumns: '1fr',
    },
  };
});

export const SearchBar = styled('input')({
  padding: '10px',
  width: '200px',
  // width: '66%',
  // marginTop: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
  flexShrink: 1,
});

export const SearchContainer = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto', // Mutarea containerului în stânga ecranului
    marginTop: 50,
    marginBottom: 40,
    marginLeft: 20, // Adăugarea marginLeft pentru a spația containerul de căutare de la marginea stângă

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  };
});

export const InputContainer = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      marginBottom: 10,
    },
  };
});

export const SearchBarStyle = styled('input')({
  padding: '10px',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
});

// export const SearchIconWrapper = styled('div')({
//   marginRight: '10px',
//   color: '#ccc',
//   width: 40,
// });

export const StylesButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  // fontSize: '16px',
});

export const Sort = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'contents',
    },
  };
});

export const Label = styled('label')(() => {
  return {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 10,
    color: 'black',
  };
});

export const Select = styled('select')(() => {
  return {
    marginLeft: 10,
    color: 'black',
    fontWeight: 600,
  };
});

// Stilizare pentru butonul modern
export const CustomButton = styled(Button)(() => ({
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

export const CustomSpan = styled('span')(() => {
  return {
    margin: 10,
    color: 'black',
    fontWeight: 600,
  };
});
