import { Heart, ShoppingCart, Storefront } from 'phosphor-react';

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
  Paragraph,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
} from './NavBar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
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
      <ContainerLinks>
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
          Home
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/projects"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Projects
        </MobileNavLink>
      </MobileMenu>
    </>
  );

  return (
    <Container>
      <ContainerWrapper>
        <ContainerParagraph>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Paragraph>Iulian Shop</Paragraph>
          </Link>
        </ContainerParagraph>
        {!isMobileView && navbarContent}
      </ContainerWrapper>
      {isMobileView && navbarContent}
    </Container>
  );
};
