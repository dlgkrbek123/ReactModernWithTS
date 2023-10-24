import type { FC } from 'react';
import type { ButtonProps } from './Button';
import type { TIconProps as CIconProps } from '../../components';
import { Button } from './Button';
import { Icon as CIcon } from '../../components';

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string;
  };

export const Icon: FC<IconProps> = ({
  name,
  iconClassName,
  className,
  ...buttoProps
}) => {
  const btnClassName = ['btn-circle', className].join(' ');

  return (
    <Button {...buttoProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  );
};
