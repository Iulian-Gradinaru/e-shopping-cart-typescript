import './NotificationMessage.css';
import { NotificationMessageProps } from './NotificationMessage.types';

export const NotificationMessage: React.FC<NotificationMessageProps> = ({
  showMessage,
  messageText,
}) => {
  return showMessage ? (
    <div className="modal">
      <p>{messageText}</p>
    </div>
  ) : null;
};
