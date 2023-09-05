// /**
//  * Imports Material UI components
//  */
// import { Typography, Grid } from '@mui/material';

// /**
//  * Imports Font Awesome Icons
//  */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

// /**
//  * Imports styles components
//  */
// import {
//   Container,
//   StylesTypography,
//   StylesButton,
//   StyledChip,
// } from './Contact.styles';

// /**
//  * Displays the component
//  */
// export const Contact: React.FC = () => {
//   const handleClick = () => {
//     window.location.href = 'mailto:iulian_gradinaru@yahoo.com';
//   };

//   return (
//     <Container>
//       <Grid
//         container
//         justifyContent="center"
//         alignItems="center"
//         direction="column"
//         item
//         spacing={2}
//         xs={11}
//         sm={9}
//         md={6}
//         lg={4}
//         xl={4}
//       >
//         <Typography variant="h4">
//           <FontAwesomeIcon size="sm" icon={faLightbulb} color="#F1C376" />{' '}
//           Interested in hiring or collaborating?
//         </Typography>
//         <StylesTypography variant="h6">
//           Whether you have a question about a project, if you are interested in
//           hiring or collaborating. I'd love to hear from you!
//         </StylesTypography>
//         <StylesButton onClick={handleClick}>Let's Talk!</StylesButton>
//         <StyledChip variant="outlined" label="iulian_gradinaru@yahoo.com " />
//       </Grid>
//     </Container>
//   );
// };

import React, { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';

import { PRODUCTS } from '../../utils/products';

export const WishList: React.FC = () => {
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { wishlist } = context;

  // Afiseaza produsele din lista de dorinte
  const wishlistItems = Object.keys(wishlist).map((itemId) => {
    const product = PRODUCTS.find((p) => p.id === parseInt(itemId, 10));
    if (!product) {
      return null;
    }

    return (
      <div key={product.id}>
        <img src={product.productImage} alt="" />
        <h2>{product.productName}</h2>

        <p>{product.descriptions}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlistItems}
    </div>
  );
};
