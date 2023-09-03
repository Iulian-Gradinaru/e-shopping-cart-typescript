import { styled } from '@mui/system';

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

// export const ProductsGrid = styled('div')({
//   width: '100%',
//   height: 'auto',
//   display: 'grid',
//   gridTemplateColumns: '1fr 1fr 1fr',
//   placeItems: 'center',
// });

export const ProductsGrid = styled('div')(({ theme }) => {
  return {
    width: '100%',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    placeItems: 'center',
    [theme.breakpoints.down('md')]: {
      paddingRight: 20,
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 20,
      gridTemplateColumns: '1fr',
    },
  };
});

export const SearchBar = styled('input')({
  padding: '10px',
  width: '66%',
  marginTop: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
});

export const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
});

export const SearchBarStyle = styled('input')({
  padding: '10px',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
});

export const SearchIconWrapper = styled('div')({
  marginRight: '10px',
  color: '#ccc',
});
