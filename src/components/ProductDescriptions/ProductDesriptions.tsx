// ProductDescription.tsx

import React from 'react';
import { useParams } from 'react-router-dom'; // Pentru a prelua id-ul produsului din URL
import { PRODUCTS } from '../../utils/products';
import { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { CustomButton } from '../../pages/Shop/Shop.style';
{
}
import {
  InputHandler,
  Description,
  CustomImage,
  ContainerProduct,
  Paragraph,
  Price,
  ContainerButtons,
  StylesButton,
  StylesParagraph,
  CountHandler,
  Title,
  ProductName,
  ProductDescriptionsTitle,
} from './ProductDesriptions.styles';

import { Link } from 'react-router-dom';
import { ProductType } from '../Item/Item.styles';

export const ProductDescriptions: React.FC = () => {
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;

  const { productId } = useParams<{ productId: string }>(); // Get product id from URL
  const product = PRODUCTS.find((p) => p.id === parseInt(productId, 10));

  // Check if the product exists in the product list
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <ProductDescriptionsTitle>Product Descriptions</ProductDescriptionsTitle>
      <Description className="description">
        <div>
          <CustomImage src={product.productImage} />
          <Price style={{ textDecoration: 'line-through' }}>
            Price: ${product.discount}
          </Price>
          <Price> Price: ${product.price}</Price>

          <CountHandler className="countHandler">
            <StylesParagraph>Add To Cart</StylesParagraph>
            <StylesButton
              disabled={cartItems[product.id] <= 0}
              onClick={() => removeFromCart(product.id)}
            >
              -
            </StylesButton>

            <InputHandler
              value={cartItems[product.id]}
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), product.id)
              }
            />

            <StylesButton onClick={() => addToCart(product.id)}>
              {' '}
              +{' '}
            </StylesButton>
          </CountHandler>
        </div>
        <ContainerProduct className="containerProduct">
          <ProductName className="product-name">
            <Title>{product.productName}</Title>
            <ProductType className="product-type">{product.type}</ProductType>
          </ProductName>
          <Paragraph>{product.descriptions}</Paragraph>
        </ContainerProduct>
      </Description>
      <ContainerButtons className="container-buttons">
        <Link to={'/'}>
          <CustomButton>Go to Shop</CustomButton>
        </Link>
        <Link to={'/cart'}>
          <CustomButton>Go to Cart</CustomButton>
        </Link>
      </ContainerButtons>
    </div>
  );
};
