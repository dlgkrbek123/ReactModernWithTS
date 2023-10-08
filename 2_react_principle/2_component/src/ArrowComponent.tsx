import type { FC } from 'react';

export type ArrowComponentprops = {
  href: string;
  text: string;
};

const ArrowComponent: FC<ArrowComponentprops> = (props) => {
  const { href, text } = props;

  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default ArrowComponent;
