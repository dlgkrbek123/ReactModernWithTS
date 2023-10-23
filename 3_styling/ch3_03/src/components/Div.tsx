import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import type { WIdthHeight } from './WIdthHeight';
import type { LeftRightTopBottom } from './LeftRightTopBottom';

export type ReactDIvProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDIvProps &
  PropsWithChildren<WIdthHeight> &
  LeftRightTopBottom & {
    src?: string;
  };

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  left,
  right,
  top,
  bottom,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
  };
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ');

  return <div {...props} className={className} style={style} />;
};
