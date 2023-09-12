import { styled } from '@mui/system';

export const Container = styled('div')({
  position: 'fixed',
  top: 20,
  right: 10,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: '10vh',
  zIndex: 9999,
  padding: 30,
  borderRadius: 5,
  backgroundColor: '#7493d0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  marginBottom: 10,
  marginTop: 10,
});

export const CustomPargraph = styled('p')({
  backgroundColor: 'rgb(243, 0, 0)',
  padding: 10,
  fontSize: 16,
  borderRadius: 5,
  color: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  top: 30,
});
