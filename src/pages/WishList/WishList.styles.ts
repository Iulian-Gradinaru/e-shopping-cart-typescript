import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const Description = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  };
});
export const CustomImage = styled('img')(({ theme }) => {
  return {
    width: 400,
    marginRight: 40,
    marginTop: 50,
    borderRadius: 10,
    transition: 'transform 0.3s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      borderRadius: 10,
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: 50,
      marginTop: 20,
      width: 230,
    },
  };
});

export const HeartIcon = styled(FontAwesomeIcon)(({ theme }) => {
  return {
    color: '#ff0000',
    position: 'absolute',
    top: 70,
    right: 400,
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: 30,
      right: 80,
    },
  };
});

export const Paragraph = styled('p')(({ theme }) => {
  return {
    width: 300,
    marginRight: 40,

    [theme.breakpoints.down('sm')]: {
      width: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 50,
    },
  };
});

export const Price = styled('p')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,

    [theme.breakpoints.down('sm')]: {
      fontWeight: 600,
    },
  };
});
export const WishListTitle = styled('h2')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 10,

    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      marginTop: 10,
    },
  };
});

export const ContainerProduct = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '40%',
    marginTop: 20,

    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  };
});
export const ContainerButtons = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
      gap: 40,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
    },
  };
});
export const CountHandler = styled('div')(({ theme }) => {
  return {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      marginLeft: 50,
    },
  };
});

export const StylesButton = styled(Button)(() => ({
  backgroundColor: '#7493d0',
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',
  height: 20,

  '&:hover': {
    backgroundColor: '#1c2331',
  },
}));

export const InputHandler = styled('input')(({ theme }) => {
  return {
    width: 60,
    height: 20,
    textAlign: 'center',
    fontWeight: 'bolder',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 11,

    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
    },
  };
});

export const StylesParagraph = styled('p')(({ theme }) => {
  return {
    fontWeight: 600,

    [theme.breakpoints.down('sm')]: {},
  };
});
export const Title = styled('h2')(({ theme }) => {
  return {
    marginTop: -80,

    [theme.breakpoints.down('sm')]: { marginTop: 30 },
  };
});

export const WishListContainer = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 40,

    [theme.breakpoints.down('sm')]: {
      // marginBottom: 0,
      // marginTop: 10,
    },
  };
});

export const ProductName = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: { marginLeft: 30 },
  };
});
