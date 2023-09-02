import { useContext } from 'react';
import { ShopContext, ContextValueInterface } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
  const context = useContext<ContextValueInterface | null>(ShopContext);
  const navigate = useNavigate();

  if (!context) {
    return (
      <div className="cart">
        <h1>Your Shopping Cart is Empty</h1>
      </div>
    );
  }

  const { cartItems, getTotalCartAmount, checkout } = context;
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id.toString()] !== 0) {
            return <CartItem product={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate('/checkout');
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
