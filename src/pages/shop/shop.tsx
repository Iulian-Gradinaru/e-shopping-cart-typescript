import { Item } from '../../components/Item/Item';
import { Carousel } from '../../components/Carousel';
import SearchIcon from '@mui/icons-material/Search';

import {
  ShopContainer,
  ProductsGrid,
  SearchBar,
  SearchContainer,
  StylesButton,
  Sort,
  InputContainer,
  Label,
  Select,
  CustomButton,
  CustomSpan,
} from './Shop.style';
import { useEffect, useState, useRef, useContext } from 'react';
import { PRODUCTS, ProductData } from '../../utils/products';
import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import { NotificationPopup } from '../../components/NotificationPopup/NotificationPopup';

export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductData[]>(PRODUCTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { showMessage } = context;

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
      <SearchContainer className="search-container">
        <InputContainer className="input-container">
          <SearchBar
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleChange}
            ref={inputRef}
          />
          <StylesButton className="btn-search" onClick={handleSearch}>
            <SearchIcon />
          </StylesButton>
        </InputContainer>
        <Sort className="sort">
          <Label className="label">
            Sort by price:
            <Select
              className="select"
              onChange={handleSortOrderChange}
              value={sortOrder || ''}
            >
              <option value="">Select </option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </Select>
          </Label>
        </Sort>
      </SearchContainer>

      <ProductsGrid className="products">
        {currentProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ProductsGrid>

      {showMessage && (
        <NotificationPopup message="Product has been added to your cart!" />
      )}

      <div className="pagination">
        <CustomButton
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage((prevstate) => prevstate - 1);
            window.scrollTo(0, 0);
          }}
        >
          Prev
        </CustomButton>
        <CustomSpan className="custom-span">{currentPage}</CustomSpan>
        <CustomButton
          disabled={lastIndex >= filteredProducts.length}
          onClick={() => {
            setCurrentPage((prevstate) => prevstate + 1);
            window.scrollTo(0, 0);
          }}
        >
          Next
        </CustomButton>
      </div>
    </ShopContainer>
  );
};
