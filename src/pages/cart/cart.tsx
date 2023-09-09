import { useContext } from 'react';
import { ShopContext, ContextValueInterface } from '../../context/shop-context';
import { PRODUCTS } from '../../utils/products';
import { CartItem } from '../../components/CartItem/CartItem';
import { useHistory } from 'react-router-dom';

import {
  Container,
  CartContainer,
  ContainerButton,
  CartMessage,
  ContainerChechout,
  Title,
} from './Cart.styles';
import { CustomButton } from '../Shop/Shop.style';

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
          <ContainerButton className="btn-checkout">
            <CustomButton onClick={() => history.push('/')}>
              Go to Shop
            </CustomButton>
            <CustomButton
              onClick={() => {
                checkout();
                history.push('/checkout');
              }}
            >
              Checkout
            </CustomButton>
          </ContainerButton>
        </ContainerChechout>
      ) : (
        <Title className="title"> Your Shopping Cart is Empty</Title>
      )}
    </Container>
  );
};
