// import React, { useContext } from 'react';
// import { Box, Paper, Typography } from '@mui/material';
// import { ContextValueInterface, ShopContext } from '../../context/shop-context';

// export const NotificationPopup: React.FC<{ message: string }> = ({
//   message,
// }) => {
//   const context = useContext<ContextValueInterface | null>(ShopContext);

//   if (!context) {
//     return null;
//   }

//   const { showMessage } = context;

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         top: '50%',
//         right: 0,
//         transform: showMessage
//           ? 'translateY(-50%)'
//           : 'translateY(-50%) translateX(100%)', // Aplică transformare doar dacă showMessage este adevărat
//         backgroundColor: 'primary.main',
//         color: 'white',
//         padding: '16px',
//         zIndex: 1000,
//         transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out', // Adaugă o tranziție pe opacity
//         opacity: showMessage ? 1 : 0, // Afișează notificarea cu opacity 1 când showMessage este adevărat
//       }}
//     >
//       <Paper
//         sx={{
//           backgroundColor: 'primary.main',
//           color: 'white',
//           padding: '16px',
//           borderRadius: '8px',
//           boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//         }}
//         elevation={3}
//       >
//         <Typography variant="body1">{message}</Typography>
//       </Paper>
//     </Box>
//   );
// };

import React, { useContext } from 'react';

import { ContextValueInterface, ShopContext } from '../../context/shop-context';
import {
  NotificationBox,
  NotificationPaper,
  NotificationTypography,
} from './NotificationPopup.styles';

export const NotificationPopup: React.FC<{ message: string }> = ({
  message,
}) => {
  const context = useContext<ContextValueInterface | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { showMessage } = context;

  return (
    <NotificationBox showMessage={showMessage}>
      <NotificationPaper>
        <NotificationTypography variant="body1">
          {message}
        </NotificationTypography>
      </NotificationPaper>
    </NotificationBox>
  );
};
