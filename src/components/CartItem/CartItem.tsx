import { useContext } from 'react';
import { ShopContext, ContextValueInterface } from '../../context/shop-context';

import {
  CartItemContainer,
  Image,
  Description,
  ProductName,
  Price,
  Discount,
  CountHandler,
  StylesButton,
  StylesParagraph,
  InputHandler,
} from './CartItem.styles';
import { ProductType } from '../Item/Item.styles';

import { CartItemProps } from './CartItem.types';

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
        <ProductName className="product-name">
          <b>{product.productName}</b>
          <ProductType className="product-type">{product.type}</ProductType>
        </ProductName>
        <div>
          <Discount style={{}}> Price: ${product.discount}</Discount>
          <Price> Price: ${product.price}</Price>
        </div>
        <CountHandler className="countHandler">
          <StylesParagraph>Add Item</StylesParagraph>
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

          <StylesButton onClick={() => addToCart(product.id)}> + </StylesButton>
        </CountHandler>
      </Description>
    </CartItemContainer>
  );
};
