import { Link } from 'react-router-dom';
import {
  MessageContainer,
  MessageContent,
  MessageTitle,
  MessageSubtitle,
  MessageParagraph,
  SocialLinks,
  SocialLink,
  SocialLinkIcon,
  MessageLink,
} from './Message.styles';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CustomButton } from '../../pages/Shop/Shop.style';

export const Message = () => {
  return (
    <MessageContainer>
      <MessageContent>
        <MessageTitle>Thank you for shopping!</MessageTitle>
        <MessageSubtitle>
          Enjoy 10% off your next purchase with code: Iulian-Gradinaru
        </MessageSubtitle>
        <MessageParagraph>Connect with Us!</MessageParagraph>
        <SocialLinks>
          <SocialLink>
            <SocialLinkIcon>
              <FontAwesomeIcon
                icon={faInstagram}
                bounce
                size="xl"
                style={{ color: '#ff0000' }}
              />
            </SocialLinkIcon>
            <MessageLink
              href="https://www.shop.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @username_instagram
            </MessageLink>
          </SocialLink>
          <SocialLink>
            <SocialLinkIcon>
              <FontAwesomeIcon
                icon={faFacebook}
                bounce
                size="xl"
                style={{ color: '#004080' }}
              />
            </SocialLinkIcon>
            <MessageLink
              href="https://www.shop.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/usernam
            </MessageLink>
          </SocialLink>
          <SocialLink>
            <SocialLinkIcon>
              <FontAwesomeIcon
                icon={faEnvelope}
                bounce
                size="xl"
                style={{ color: '#000080' }}
              />
            </SocialLinkIcon>
            <MessageLink
              href="https://www.shop.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              email@example.com
            </MessageLink>
          </SocialLink>
        </SocialLinks>
        <MessageParagraph>
          Website:{' '}
          <MessageLink
            href="https://www.shop.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.shop.ro
          </MessageLink>
        </MessageParagraph>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={'/'}>
            <CustomButton>Go to Shop</CustomButton>
          </Link>
        </div>
      </MessageContent>
    </MessageContainer>
  );
};
