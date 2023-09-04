import { Item } from '../../components/Item/Item';
import { Carousel } from '../../components/Carousel';
import SearchIcon from '@mui/icons-material/Search';

import {
  ShopContainer,
  ProductsGrid,
  SearchBar,
  SearchContainer,
  Button,
  Sort,
} from './Shop.style';
import { useEffect, useState, useRef } from 'react';
import { PRODUCTS, ProductData } from '../../utils/products';

export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductData[]>(PRODUCTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  const handleSearch = () => {
    const filtered = PRODUCTS.filter((product) =>
      product.productName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as 'asc' | 'desc' | null);
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

  useEffect(() => {
    if (sortOrder !== null) {
      const sortedProducts = [...filteredProducts];
      sortedProducts.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setFilteredProducts(sortedProducts);
    }
  }, [sortOrder, filteredProducts]);

  const productsPerPage = 9;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  return (
    <ShopContainer className="shop">
      <Carousel />
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
          ref={inputRef}
        />
        <Button className="btn-search" onClick={handleSearch}>
          <SearchIcon />
        </Button>
        <Sort className="sort">
          <label>
            Sort by price:
            <select onChange={handleSortOrderChange} value={sortOrder || ''}>
              <option value="">Select </option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </label>
        </Sort>
      </SearchContainer>

      <ProductsGrid className="products">
        {currentProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ProductsGrid>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevstate) => prevstate - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          disabled={lastIndex >= filteredProducts.length}
          onClick={() => setCurrentPage((prevstate) => prevstate + 1)}
        >
          Next
        </button>
      </div>
    </ShopContainer>
  );
};
