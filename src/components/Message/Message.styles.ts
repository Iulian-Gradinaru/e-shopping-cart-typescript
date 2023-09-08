import { styled } from '@mui/system';

export const MessageContainer = styled('div')(({ theme }) => ({
  backgroundImage: "url('background.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  minHeight: '100vh', // Folosim minHeight în loc de height pentru a permite adaptarea pe ecrane mici
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {},
}));

export const MessageContent = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  border: '3px solid #edacac',
  padding: 20,
  [theme.breakpoints.down('sm')]: {
    width: ' 90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export const MessageTitle = styled('h1')({
  fontSize: '36px',
  marginBottom: '10px',
  color: '#333',
});
export const MessageSubtitle = styled('h2')({
  fontSize: '24px',
  marginBottom: '10px',
  color: '#555',
});

export const MessageParagraph = styled('p')({
  fontSize: '18px',
  color: '#555',
  margin: '10px 0',
});

export const SocialLinks = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});

export const SocialLink = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0',
});

export const SocialLinkIcon = styled('i')({
  fontSize: '30px',
  marginRight: '10px',
});

export const SocialLinkText = styled('p')({
  fontSize: '16px',
  color: '#555',
});

export const MessageLink = styled('a')({
  textDecoration: 'none',
  color: 'rgb(40 40 40)',
  fontWeight: 'bold',
});

export const MessageLinkHover = styled(MessageLink)({
  textDecoration: 'underline',
});
