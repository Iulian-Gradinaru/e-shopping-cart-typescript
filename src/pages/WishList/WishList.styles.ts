// Imports styled*/
import { styled } from '@mui/system';

// Imports Material UI components*/
import { Button, Typography, Chip } from '@mui/material';

// Styles the Container*/
export const Container = styled('div')(() => {
  return {
    backgroundColor: '#fff',
    padding: '0 1rem',
    paddingTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '-7px',
    paddingBottom: 30,
  };
});

// Styles the Styles Typography*/
export const StylesTypography = styled(Typography)(() => {
  return {
    paddingTop: '1.5rem',
  };
});

// Styles the Styles Button*/
export const StylesButton = styled(Button)(() => {
  return {
    fontSize: 25,
    marginTop: '2rem',
    backgroundColor: '#fabe5a',
    borderRadius: 10,
    border: '2px solid #000000',
    color: '#000000',
    paddingLeft: 20,
    paddingRight: 20,
    '&:hover': {
      backgroundColor: '#F7E6C4',
    },
  };
});

// Styles the Styled Chip*/
export const StyledChip = styled(Chip)(() => {
  return {
    marginTop: '2rem',
    fontSize: '1.2rem',
    backgroundColor: '#fff',
    border: '2px solid #000000',
    padding: 25,
  };
});
