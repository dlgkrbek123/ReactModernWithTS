import type { FC } from 'react';
import type { ReactDIvProps } from './Div';
import { Div } from './Div';

export type OverlayProps = ReactDIvProps & {
  opacityClass?: string;
};

export const Overlay: FC<OverlayProps> = ({
  className: _className,
  opacityClass,
  children,
  ...props
}) => {
  const className = [
    _className,
    'fixed',
    'z-50',
    'w-screen',
    'h-screen',
    opacityClass ?? 'bg-black/70',
    'flex',
    'items-center',
    'justify-center',
  ].join(' ');

  return (
    <Div {...props} className={className} top="0" left="0">
      {children}
    </Div>
  );
};
