import { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { ProductProps } from './Item.types';

export const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }
  const { addToCart, cartItems } = context;

  const cartItemCount = cartItems[product.id];

  return (
    <div className="product">
      <img src={product.productImage} />
      <div className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> ${product.price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
