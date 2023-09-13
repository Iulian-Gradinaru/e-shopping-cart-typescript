import { Heart, ShoppingCart, Storefront } from 'phosphor-react';
import logo from '../../assets/products/logo.png';

import { useState } from 'react';

/**
 * Imports Material UI components
 */
import { useMediaQuery } from '@mui/material';

import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

/**
 * Imports styles components
 */
import {
  Container,
  ContainerParagraph,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
  CustomLogo,
  WishlistContainer,
  WishlistCounter,
} from './NavBar.styles';

import { Link } from 'react-router-dom';

/**
 * Displays the component
 */
export const NavBar: React.FC = () => {
  /**
   * Initializes mobile menu
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const context = useContext(ShopContext);

  if (!context) {
    return null;
  }

  const { getWishlistItemCount, getCartItemCount } = context;

  /**
   * Handles the mobile view
   */
  const isMobileView = useMediaQuery('(max-width: 600px)');

  /**
   * Handles the mobile menu state
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Handles the Nav content
   */
  const navbarContent = (
    <>
      <ContainerLinks className="iulian">
        <CustomNavLink
          exact={true}
          to="/"
          activeStyle={{ color: '#ffff' }}
          title="Shop"
        >
          <Storefront size={32} />
        </CustomNavLink>
        <CustomNavLink
          exact
          to="/wishlist"
          activeStyle={{ color: '#ffff' }}
          title="Wishlist"
        >
          <WishlistContainer>
            <Heart size={32} />
            {getWishlistItemCount() > 0 && (
              <WishlistCounter>{getWishlistItemCount()}</WishlistCounter>
            )}
          </WishlistContainer>
        </CustomNavLink>
        <CustomNavLink
          exact
          to="/cart"
          activeStyle={{ color: '#ffff' }}
          title="Cart"
        >
          <WishlistContainer>
            <ShoppingCart size={32} />
            {getCartItemCount() > 0 && (
              <WishlistCounter>{getCartItemCount()}</WishlistCounter>
            )}
          </WishlistContainer>
        </CustomNavLink>
      </ContainerLinks>
      <MobileMenu isOpen={isMobileMenuOpen} to={''}>
        <MobileNavLink
          exact={true}
          to="/"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          <Storefront size={32} />
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/wistlist"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          <Heart size={32} />
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/cart"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          <ShoppingCart size={32} />
        </MobileNavLink>
      </MobileMenu>
    </>
  );

  return (
    <Container>
      <ContainerWrapper>
        <ContainerParagraph>
          <Link style={{ textDecoration: 'none' }} to="/">
            <CustomLogo className="logo" src={logo} alt="" />
          </Link>
        </ContainerParagraph>
        {!isMobileView && navbarContent}
      </ContainerWrapper>
      {isMobileView && navbarContent}
    </Container>
  );
};
