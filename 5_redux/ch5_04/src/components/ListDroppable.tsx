import type { FC } from 'react';
import type { DivProps } from './Div';
import { useRef } from 'react';
import { useDrop } from 'react-dnd';

export type ListDroppableProps = DivProps & {};

export const ListDroppable: FC<ListDroppableProps> = ({ ...props }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [_, drop] = useDrop({ accept: 'list' });

  drop(divRef);

  return <div ref={divRef} {...props} />;
};
