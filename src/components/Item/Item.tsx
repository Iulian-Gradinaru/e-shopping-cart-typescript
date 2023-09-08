import React, { useContext, useState } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { ProductProps } from './Item.types';
import {
  Container,
  Image,
  Descriptions,
  AddToCartButton,
  ProductName,
  ProductType,
} from './Item.styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

export const Item: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { addToCart, cartItems, addToWishlist, removeFromWishlist } = context;
  const cartItemCount = cartItems[product.id];

  // Stare pentru a ține evidența dacă inima a fost apăsată sau nu
  const [isHeartPressed, setIsHeartPressed] = useState(false);

  // Funcție pentru a inversa starea iconiței atunci când se face click
  const toggleHeart = () => {
    // Dacă inima nu a fost apăsată încă, o marcăm ca apăsată
    if (!isHeartPressed) {
      setIsHeartPressed(true);
      addToWishlist(product.id); // Adaugă în lista de dorințe
    } else {
      setIsHeartPressed(false);
      removeFromWishlist(product.id);
    }
  };

  return (
    <Container className="product">
      <Link to={`/product/${product.id}`} key={product.id}>
        {/* Adăugați ghilimele pentru a face șirul corect */}
        <Image src={product.productImage} />
      </Link>
      <Descriptions className="description">
        <ProductName className="product-name">
          <b>{product.productName}</b>
          <ProductType className="product-type">{product.type}</ProductType>
        </ProductName>
        <p style={{ textDecoration: 'line-through' }}>${product.discount}</p>
        <p> ${product.price}</p>
      </Descriptions>
      <div style={{ display: 'flex', alignItems: 'center', gap: '160px' }}>
        <AddToCartButton
          className="addToCartBttn"
          onClick={() => addToCart(product.id)}
        >
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </AddToCartButton>
        <button
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          onClick={toggleHeart}
        >
          <FontAwesomeIcon
            icon={isHeartPressed ? faSolidHeart : faRegularHeart}
            size="2xl"
            style={{ color: '#ff0000' }}
          />
        </button>
      </div>
    </Container>
  );
};
