import React, { useContext } from 'react';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../utils/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AddToCartButton } from '../../components/Item/Item.styles';

export const WishList: React.FC = () => {
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { wishlist, removeFromWishlist, addToCart } = context;

  // Afiseaza produsele din lista de dorinte
  const wishlistItems = Object.keys(wishlist).map((itemId) => {
    const product = PRODUCTS.find((p) => p.id === parseInt(itemId, 10));
    if (!product) {
      return null;
    }

    const handleRemoveFromWishlist = (itemId: number) => {
      removeFromWishlist(itemId);
    };

    return (
      <div key={product.id}>
        <div className="image">
          <img src={product.productImage} alt="" />
        </div>
        <h2>{product.productName}</h2>
        <p>{product.descriptions}</p>
        <button
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          onClick={() => handleRemoveFromWishlist(product.id)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            beat
            size="xl"
            style={{ color: '#ff0000' }}
          />
        </button>
        <button
          style={{
            background: '#007bff', // Stilizare pentru butonul "Add to Cart"
            color: '#fff',
            border: 'none',
            padding: '4px 8px',
            cursor: 'pointer',
            marginLeft: '8px',
          }}
          onClick={() => addToCart(product.id)} // Adăugare în coș la apăsarea butonului
        >
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlistItems}
    </div>
  );
};
