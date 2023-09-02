import { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { ProductProps } from './Item.types';
import { Container, Image, Descriptions, AddToCartButton } from './Item.styles';
// import './Item.css';

export const Item: React.FC<ProductProps> = (props) => {
  const { product } = props;

  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }
  const { addToCart, cartItems } = context;

  const cartItemCount = cartItems[product.id];

  return (
    <Container className="product">
      <Image src={product.productImage} />
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
    </Container>
  );
};
