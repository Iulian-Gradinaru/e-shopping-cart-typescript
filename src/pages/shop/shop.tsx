import { PRODUCTS } from '../../utils/products';
import { Item } from '../../components/Item/Item';

import { ShopContainer, ShopTitle, ProductsGrid } from './Shop.style';

export const Shop = () => {
  return (
    <ShopContainer className="shop">
      <ShopTitle className="shopTitle">
        <h1>Iulian Shop</h1>
      </ShopTitle>

      <ProductsGrid className="products">
        {PRODUCTS.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ShopContainer>
  );
};

// import { PRODUCTS } from '../../utils/products';
// import { Item } from '../../components/Item/Item';
// import './shop.css';
// import { Grid, Box, Typography } from '@mui/material';

// export const Shop = () => {
//   return (
//     <Grid
//       className="shop"
//       container
//       direction="row"
//       alignItems="center"
//       spacing={3}
//       item
//       xs={11}
//       sm={10}
//       md={11}
//       lg={9}
//       xl={7}
//     >
//       <Box className="shopTitle">
//         <Typography>Iulian Shop</Typography>
//       </Box>

//       <Grid
//         className="products"
//         direction="column"
//         alignItems="center"
//         spacing={3}
//         item
//         xs={11}
//         sm={10}
//         md={11}
//         lg={9}
//         xl={7}
//       >
//         {PRODUCTS.map((product) => (
//           <Item product={product} />
//         ))}
//       </Grid>
//     </Grid>
//   );
// };
