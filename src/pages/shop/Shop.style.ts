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
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: 20,
    },
  };
});
