import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  CSSProperties,
} from 'react';

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type TIconProps = ReactSpanProps & {
  name: string;
};

export const Icon: FC<TIconProps> = ({
  name,
  className: _className,
  ...remains
}) => {
  const className = ['material-icons', _className].join(' ');

  return (
    <span className={className} {...remains}>
      {name}
    </span>
  );
};
