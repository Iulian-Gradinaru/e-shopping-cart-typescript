/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Box, Typography } from '@mui/material';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    backgroundColor: '#fabe5a',
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '-8px',
    '& svg': {
      color: '#fff',
      marginLeft: '1rem',
    },
  };
});

/**
 * Styles the Styles Box
 */
export const StylesBox = styled(Box)(() => {
  return {
    display: 'flex',
    paddingBottom: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
  };
});

/**
 * Styles the Styles Typography
 */
export const StylesTypography = styled(Typography)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    color: '#000000',

    '&: hover': {
      textDecoration: 'underline',
      color: '#606C5D',
    },
    '& a': {
      textDecoration: 'none',
      color: '#000000',
    },
    '& svg': {
      color: '#fff',
    },
    '& .MuiSvgIcon-root': {
      color: '#fff',
    },
  };
});
