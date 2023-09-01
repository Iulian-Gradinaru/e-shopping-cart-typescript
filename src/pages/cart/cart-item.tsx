import { useContext } from 'react';
import { ShopContext, ShopContextInterface } from '../../context/shop-context';

interface CartItemProps {
  data: {
    id: string;
    productName: string;
    price: number;
    productImage: string;
  };
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, productName, price, productImage } = props.data;
  const context = useContext<ShopContextInterface | null>(ShopContext);

  if (!context) {
    // Poți trata cazul în care contextul este null aici, dacă este necesar
    return null;
  }

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context;

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
