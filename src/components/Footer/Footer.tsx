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
  ContainerParagraph,
  Paragraph,
} from './Footer.styles';

/**
 * Display the component
 */
export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialWrapper>
        <ContainerParagraph className="container-paragraph">
          <SocialParagraph>
            Get connected with us on social networks:
          </SocialParagraph>
        </ContainerParagraph>
        <div className="container-icon">
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
        </div>
      </SocialWrapper>
      <RowWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            INFORMATION
            <Underline />
          </ColumnHeading>
          <Paragraph>About IulianShop</Paragraph>
          <Paragraph>Benefits</Paragraph>
          <Paragraph>Shipping</Paragraph>
          <Paragraph>Return</Paragraph>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            SUPPORT
            <Underline />
          </ColumnHeading>
          <Paragraph>Warranty</Paragraph>
          <Paragraph>Cookies information</Paragraph>
          <Paragraph>Privacy Policy</Paragraph>
          <Paragraph>Terms and Conditions</Paragraph>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            USEFUL LINKS
            <Underline />
          </ColumnHeading>
          <Paragraph>Your Account</Paragraph>
          <Paragraph>Become an Affiliate</Paragraph>
          <Paragraph>Shipping Rates</Paragraph>
          <Paragraph>Help</Paragraph>
        </ColumnWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            CONTACT
            <Underline />
          </ColumnHeading>
          <ContactInfo>
            <FontAwesomeIcon icon={faHouse} />
            <IconWrapper>Bucharest, RO</IconWrapper>
          </ContactInfo>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <Link href="mailto:info@example.com">
              iulian_gradinaru@yahoo.com
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <Link href="tel:0123456788">+40 722 358 516</Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faFax} />{' '}
            <Link href="fax:0123456789">+40 722 358 516</Link>
          </p>
        </ColumnWrapper>
      </RowWrapper>
      <RightsWrapper>©2023 Copyright: Iulian Gradinaru</RightsWrapper>
    </FooterContainer>
  );
};
