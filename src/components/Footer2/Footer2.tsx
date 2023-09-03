/**
 * Imports library
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Imports Icons from library fortawesome/free-brands-svg-icons
 */
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faGoogle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

/**
 * Imports Icons from library fortawesome/free-solid-svg-icons
 */
import {
  faEnvelope,
  faFax,
  faHouse,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Import styled
 */
import {
  FooterContainer,
  SocialWrapper,
  SocialParagraph,
  IconLink,
  RowWrapper,
  ColumnWrapper,
  ColumnHeading,
  RightsWrapper,
  Link,
  ContactInfo,
  IconWrapper,
  Underline,
} from './Fotter2.styles';

/**
 * Display the component
 */
export const Footer2: React.FC = () => {
  return (
    <FooterContainer>
      <SocialWrapper>
        <SocialParagraph>
          Get connected with us on social networks:
        </SocialParagraph>

        <IconLink href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </IconLink>
        <IconLink href="https://www.twitter.com" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </IconLink>
        <IconLink href="https://www.google.com" target="_blank">
          <FontAwesomeIcon icon={faGoogle} />
        </IconLink>
        <IconLink href="https://www.instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </IconLink>
        <IconLink href="https://www.linkedin.com" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </IconLink>
        <IconLink href="https://www.github.com" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
      </SocialWrapper>
      <RowWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            COMPANY NAME
            <Underline />
          </ColumnHeading>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            PRODUCTS
            <Underline />
          </ColumnHeading>
          <p>MDBootstrap</p>
          <p>MDWordPress</p>
          <p>BrandFlow</p>
          <p>Bootstrap Angular</p>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            USEFUL LINKS
            <Underline />
          </ColumnHeading>
          <p>Your Account</p>
          <p>Become an Affiliate</p>
          <p>Shipping Rates</p>
          <p>Help</p>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            CONTACT
            <Underline />
          </ColumnHeading>
          <ContactInfo>
            <FontAwesomeIcon icon={faHouse} />
            <IconWrapper>New York, NY 10012, US</IconWrapper>
          </ContactInfo>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <Link href="mailto:info@example.com">info@example.com</Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <Link href="tel:0123456788">+01 234 567 88</Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faFax} />{' '}
            <Link href="fax:0123456789">+01 234 567 89</Link>
          </p>
        </ColumnWrapper>
      </RowWrapper>
      <RightsWrapper>©2020 Copyright: React Playground</RightsWrapper>
    </FooterContainer>
  );
};
