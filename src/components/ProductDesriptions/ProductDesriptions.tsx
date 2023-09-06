// ProductDescription.tsx

import React from 'react';
import { useParams } from 'react-router-dom'; // Pentru a prelua id-ul produsului din URL
import { PRODUCTS } from '../../utils/products';
import { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
{
}
import { InputHandler } from './ProductDesriptions.styles';
import { Description } from '../CartItem/CartItem.styles';
import { Link } from 'react-router-dom';

export const ProductDescriptions: React.FC = () => {
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;

  const { productId } = useParams<{ productId: string }>(); // Preia id-ul produsului din URL
  const product = PRODUCTS.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Produsul nu a fost găsit.</div>;
  }

  return (
    <div>
      <img src={product.productImage} />
      <h2>{product.productName}</h2>
      <p>{product.descriptions}</p>

      <Description className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> Price: ${product.price}</p>
        <div className="countHandler">
          <p>Add To Cart</p>
          <button
            disabled={cartItems[product.id] <= 0}
            onClick={() => removeFromCart(product.id)}
          >
            -
          </button>

          <InputHandler
            value={cartItems[product.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), product.id)
            }
          />

          <button onClick={() => addToCart(product.id)}> + </button>
        </div>
      </Description>
      <Link to={'/'}>
        <button>Go to Shop</button>
      </Link>
      <Link to={'/cart'}>
        <button>Go to Cart</button>
      </Link>
    </div>
  );
};
