import { PRODUCTS } from '../../utils/products';
import { Product } from '../../components/Item/Item';
import './shop.css';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Iulian Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};
