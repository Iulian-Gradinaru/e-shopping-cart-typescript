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
  width: '66%',
  // marginTop: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
});

export const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  marginTop: 50,
  marginBottom: 40,
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

export const Button = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  // fontSize: '16px',
});

export const Sort = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 20,
});
