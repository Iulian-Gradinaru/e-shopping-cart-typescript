import { useContext } from 'react';
import { ShopContext, ContextValueInterface } from '../../context/shop-context';
import { ProductData } from '../../products';

interface CartItemProps {
  product: ProductData;
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { product } = props;
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;

  return (
    <div className="cartItem">
      <img src={product.productImage} alt={product.productName} />
      <div className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> Price: ${product.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(product.id)}> - </button>
          <input
            value={cartItems[product.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), product.id)
            }
          />
          <button onClick={() => addToCart(product.id)}> + </button>
        </div>
      </div>
    </div>
  );
};
