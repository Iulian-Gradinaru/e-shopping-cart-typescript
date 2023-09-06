import './Message.css';
import { Link } from 'react-router-dom';

export const Message = () => {
  return (
    <div className="message-container">
      <div className="message-content">
        <h1>Thank you for shopping!</h1>
        <h2>Enjoy 10% off your next purchase with code: Iulian-Gradiaru</h2>
        <p>Connect with Us!</p>
        <div className="social-links">
          <div className="social-link">
            <i className="fab fa-instagram"></i>
            <p>@username_instagram</p>
          </div>
          <div className="social-link">
            <i className="fab fa-facebook"></i>
            <p>facebook.com/username_facebook</p>
          </div>
          <div className="social-link">
            <i className="far fa-envelope"></i>
            <p>email@example.com</p>
          </div>
        </div>
        <p>
          Website:{' '}
          <a
            href="https://www.shop.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.shop.ro
          </a>
        </p>
      </div>
      <Link to={'/'}>
        <button>Go to Shop</button>
      </Link>
    </div>
  );
};
