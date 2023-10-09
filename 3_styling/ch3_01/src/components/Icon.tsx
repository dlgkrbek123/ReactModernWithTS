import type { FC } from 'react';

export type TIconProps = {
  name: string;
  style: any;
};

export const Icon: FC<TIconProps> = (props) => {
  return <span className="material-icons" {...props} />;
};
