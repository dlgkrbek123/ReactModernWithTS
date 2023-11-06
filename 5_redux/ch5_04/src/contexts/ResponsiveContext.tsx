import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { useWindowResize } from '../hooks';

export type ContextType = {
  breakpoint: string;
};
type ResponsiveProviderProps = {};

const defaultContextValue: ContextType = {
  breakpoint: '',
};

export const ResponsiveContext =
  createContext<ContextType>(defaultContextValue);

export const useResponsive = () => {
  const { breakpoint } = useContext(ResponsiveContext);

  return breakpoint;
};

export const ResponsiveProvider: FC<
  PropsWithChildren<ResponsiveProviderProps>
> = ({ children }) => {
  const [width] = useWindowResize();

  console.log(width);

  const breakpoint =
    width < 640
      ? 'sm'
      : width < 768
      ? 'md'
      : width < 1024
      ? 'lg'
      : width < 1280
      ? 'xl'
      : '2xl';

  return (
    <ResponsiveContext.Provider value={{ breakpoint }} children={children} />
  );
};
