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
        <CustomNavLink exact={true} to="/" activeStyle={{ color: '#ffff' }}>
          <Storefront size={32} />
        </CustomNavLink>
        <CustomNavLink exact to="/wishlist" activeStyle={{ color: '#ffff' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Heart size={32} />
            {getWishlistItemCount() > 0 && (
              <span
                style={{
                  marginLeft: '0px',
                  fontSize: '12px', // Mărimea textului pentru cifră
                  fontWeight: 'bold', // Stilul textului pentru cifră
                  backgroundColor: '#ff0000', // Fundal pentru cifră
                  color: '#ffffff', // Culoarea textului pentru cifră
                  borderRadius: '50%', // Rotunjirea pentru cifră
                  padding: '2px 6px', // Spațierea pentru cifră
                  position: 'relative', // Poziționare relativă pentru a se suprapune peste inimă
                  top: '0px', // Ajustarea poziției pe verticală pentru a se suprapune
                }}
              >
                {getWishlistItemCount()}
              </span>
            )}
          </div>
        </CustomNavLink>
        <CustomNavLink exact to="/cart" activeStyle={{ color: '#ffff' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <ShoppingCart size={32} />
            {getCartItemCount() > 0 && (
              <span
                style={{
                  marginLeft: '0px',
                  fontSize: '12px', // Mărimea textului pentru cifră
                  fontWeight: 'bold', // Stilul textului pentru cifră
                  backgroundColor: '#ff0000', // Fundal pentru cifră
                  color: '#ffffff', // Culoarea textului pentru cifră
                  borderRadius: '50%', // Rotunjirea pentru cifră
                  padding: '2px 6px', // Spațierea pentru cifră
                  position: 'relative', // Poziționare relativă pentru a se suprapune peste inimă
                  top: '0px', // Ajustarea poziției pe verticală pentru a se suprapune
                }}
              >
                {getCartItemCount()}
              </span>
            )}
          </div>
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
