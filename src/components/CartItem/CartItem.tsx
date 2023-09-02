import { useContext } from 'react';
import { ShopContext, ContextValueInterface } from '../../context/shop-context';

import { CartItemProps } from './CartItem.types';
import {
  CartItemContainer,
  Image,
  Description,
  InputHandler,
} from './CartItem.styles';

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { product } = props;
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;

  return (
    <CartItemContainer className="cartItem">
      <Image src={product.productImage} alt={product.productName} />
      <Description className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> Price: ${product.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(product.id)}> - </button>
          <InputHandler
            value={cartItems[product.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), product.id)
            }
          />
          <button onClick={() => addToCart(product.id)}> + </button>
        </div>
      </Description>
    </CartItemContainer>
  );
};
