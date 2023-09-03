import { Item } from '../../components/Item/Item';
import { Carousel } from '../../components/Carousel';
import SearchIcon from '@mui/icons-material/Search';

import {
  ShopContainer,
  ShopTitle,
  ProductsGrid,
  SearchBar,
  SearchContainer,
  SearchIconWrapper,
} from './Shop.style';
import { useEffect, useState, useRef } from 'react';
import { PRODUCTS, ProductData } from '../../utils/products';

export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductData[]>(PRODUCTS);

  const handleChange = (e: any) => setSearchTerm(e.target.value);

  const handleSearch = () => {
    const filtered = PRODUCTS.filter((product) =>
      product.productName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setFilteredProducts(PRODUCTS);
    }
  }, [searchTerm]);

  return (
    <ShopContainer className="shop">
      <Carousel />
      <ShopTitle className="shopTitle">
        <h1>Iulian Shop</h1>
      </ShopTitle>
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={handleSearch}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </button>
      </SearchContainer>

      <ProductsGrid className="products">
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ShopContainer>
  );
};
