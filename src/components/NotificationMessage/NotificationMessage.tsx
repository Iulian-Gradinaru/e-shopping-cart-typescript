import { Container, CustomPargraph } from './NotificationMessage.styles';
import { NotificationMessageProps } from './NotificationMessage.types';

export const NotificationMessage: React.FC<NotificationMessageProps> = ({
  showMessage,
  messageText,
}) => {
  return showMessage ? (
    <Container className="modal">
      <CustomPargraph>{messageText}</CustomPargraph>
    </Container>
  ) : null;
};
