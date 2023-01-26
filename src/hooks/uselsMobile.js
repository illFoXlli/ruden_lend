import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => useMediaQuery({ query: '(max-width:767px)' });
export const useIsTablet = () =>
  useMediaQuery({ query: '(min-width: 768px) and (max-width: 1359px)' });
export const useIsDesktop = () =>
  useMediaQuery({ query: '(min-width:1360px)' });
