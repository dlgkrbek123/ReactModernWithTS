import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import type { WIdthHeight } from './WIdthHeight';

export type ReactDIvProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDIvProps &
  PropsWithChildren<WIdthHeight> & {
    src?: string;
  };

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
  };
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ');

  return <div {...props} className={className} style={style} />;
};
