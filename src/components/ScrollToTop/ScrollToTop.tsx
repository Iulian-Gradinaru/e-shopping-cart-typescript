import { Fragment, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface ScrollToTopProps {
  children: ReactNode;
}

/**
 * Displays the component
 */
export const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
  const { children } = props;
  /**
   * Gets the current path name
   */
  const { pathname } = useLocation();

  /**
   * Resets the scroll position to top upon route change
   */
  useEffect(() => {
    /**
     * Scrolls back to top
     */
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
};
