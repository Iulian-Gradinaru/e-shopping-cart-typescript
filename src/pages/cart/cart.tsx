import { useContext } from 'react';
import { ShopContext, ContextValueInterface } from '../../context/shop-context';
import { PRODUCTS } from '../../utils/products';
import { CartItem } from '../../components/CartItem/CartItem';
import { useHistory } from 'react-router-dom';

import {
  Container,
  CartContainer,
  CheckoutButton,
  CartMessage,
  ContainerChechout,
} from './Cart.styles';

export const Cart = () => {
  const context = useContext<ContextValueInterface | null>(ShopContext);
  const history = useHistory();

  if (!context) {
    return (
      <div className="cart" style={{ textAlign: 'center', padding: '10px' }}>
        <CartMessage>Your Shopping Cart is Empty</CartMessage>
      </div>
    );
  }

  const { cartItems, getTotalCartAmount, checkout } = context;
  const totalAmount = getTotalCartAmount();

  return (
    <Container className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <CartContainer className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id.toString()] !== 0) {
            return <CartItem product={product} key={product.id} />;
          }
          return null;
        })}
      </CartContainer>

      {totalAmount > 0 ? (
        <ContainerChechout className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <div className="btn-checkout">
            <CheckoutButton onClick={() => history.push('/')}>
              Continue Shopping
            </CheckoutButton>
            <CheckoutButton
              onClick={() => {
                checkout();
                history.push('/checkout');
              }}
            >
              Checkout
            </CheckoutButton>
          </div>
        </ContainerChechout>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </Container>
  );
};
