import { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { ProductProps } from './Item.types';
import { Container, Image, Descriptions, AddToCartButton } from './Item.styles';
import { Link } from 'react-router-dom';

export const Item: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }
  const { addToCart, cartItems, addToWishlist } = context;

  const cartItemCount = cartItems[product.id];

  return (
    <Container className="product">
      <Link to={`/product/${product.id}`} key={product.id}>
        <Image src={product.productImage} />
      </Link>
      <Descriptions className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> ${product.price}</p>
      </Descriptions>
      <AddToCartButton
        className="addToCartBttn"
        onClick={() => addToCart(product.id)}
      >
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </AddToCartButton>
      <button onClick={() => addToWishlist(product.id)}>Add to Wishlist</button>
    </Container>
  );
};
