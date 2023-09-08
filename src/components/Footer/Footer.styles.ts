/**
 * Import styled
 */
import { styled } from '@mui/system';

/**
 * Stiled the FooterContainer
 */
export const FooterContainer = styled('footer')(({ theme }) => {
  return {
    textAlign: 'center',
    // position: 'fixed',
    // left: 0,
    // bottom: 0,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '52vh',
    },
  };
});

/**
 * Stiled the SocialWrapper
 */
export const SocialWrapper = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161c27',
    color: 'white',
    padding: 7,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  };
});

export const ContainerParagraph = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  };
});

/**
 * Stiled the SocialParagraph
 */
export const SocialParagraph = styled('p')(() => {
  return {
    textAlign: 'left',
    marginRight: 'auto',
    marginLeft: 20,
  };
});

/**
 * Stiled the IconLink
 */
export const IconLink = styled('a')(() => {
  return {
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
  };
});

/**
 * Stiled the RowWrapper
 */
export const RowWrapper = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'hsl(220deg 27.27% 15.1%)',
    color: 'white',
  };
});

/**
 * Stiled the ColumnWrapper
 */
export const ColumnWrapper = styled('div')(() => {
  return {
    margin: '0 20px',
    width: 200,
    textAlign: 'left',
  };
});

/**
 * Stiled the ColumnHeading
 */
export const ColumnHeading = styled('p')(() => {
  return {
    fontWeight: 'bold',
    marginBottom: 10,
    position: 'relative',
    display: 'inline-block',
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});

/**
 * Stiled the RightsWrapper
 */
export const RightsWrapper = styled('div')(() => {
  return {
    backgroundColor: '#161c27',
    color: 'white',
    fontSize: 17,
    padding: 16,
  };
});

/**
 * Stiled the Link
 */
export const Link = styled('a')(() => {
  return {
    color: '#ffffff',
    textDecoration: 'inherit',
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});

/**
 * Stiled the ContactInfo
 */
export const ContactInfo = styled('p')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  };
});

/**
 * Stiled the IconWrapper
 */
export const IconWrapper = styled('span')(() => {
  return {
    marginLeft: 5,
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});

/**
 * Stiled the Underline
 */
export const Underline = styled('span')(() => {
  return {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    height: 1,
    backgroundColor: 'hsl(220deg 29.77% 41.63%)',
  };
});

export const Paragraph = styled('p')(() => {
  return {
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});
