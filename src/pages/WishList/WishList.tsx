import React, { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../utils/products';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
  HeartIcon,
  WishListTitle,
  WishListContainer,
  ProductName,
} from './WishList.styles';
import { CustomButton } from '../Shop/Shop.style';
import { Link } from 'react-router-dom';
import { ProductType } from '../../components/Item/Item.styles';

export const WishList: React.FC = () => {
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const {
    wishlist,
    removeFromWishlist,
    addToCart,
    cartItems,
    removeFromCart,
    updateCartItemCount,
  } = context;

  // Afiseaza produsele din lista de dorinte
  const wishlistItems = Object.keys(wishlist).map((itemId) => {
    const product = PRODUCTS.find((p) => p.id === parseInt(itemId, 10));
    if (!product) {
      return null;
    }

    const handleRemoveFromWishlist = (itemId: number) => {
      removeFromWishlist(itemId);
    };

    return (
      <div key={product.id}>
        <Description className="description">
          <div>
            <CustomImage src={product.productImage} />
            <button
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              onClick={() => handleRemoveFromWishlist(product.id)}
            >
              <HeartIcon className="iulian" icon={faHeart} beat size="2xl" />
            </button>
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
      </div>
    );
  });

  return (
    <WishListContainer>
      <WishListTitle>Wishlist</WishListTitle>
      {wishlistItems}
      <ContainerButtons className="container-buttons">
        <Link to={'/'}>
          <CustomButton>Go to Shop</CustomButton>
        </Link>
        <Link to={'/cart'}>
          <CustomButton>Go to Cart</CustomButton>
        </Link>
      </ContainerButtons>
    </WishListContainer>
  );
};
