// NotificationPopup.styles.ts
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NotificationBoxProps } from './NotificationPopup.types';

export const NotificationBox = styled(Box)<NotificationBoxProps>(
  ({ showMessage }) => ({
    position: 'fixed',
    top: '50%',
    right: 0,
    transform: showMessage
      ? 'translateY(-50%)'
      : 'translateY(-50%) translateX(100%)', // Aplică transformare doar dacă showMessage este adevărat
    backgroundColor: '#7493d0',
    // color: 'white',
    padding: '16px',
    zIndex: 1000,
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out', // Adaugă o tranziție pe opacity
    opacity: showMessage ? 1 : 0, // Afișează notificarea cu opacity 1 când showMessage este adevărat
  })
);

export const NotificationPaper = styled(Paper)({
  backgroundColor: 'white',
  // color: 'white',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
});

export const NotificationTypography = styled(Typography)({
  color: 'black',
});
