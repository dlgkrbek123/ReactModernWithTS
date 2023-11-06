import type { FC } from 'react';
import type { List } from '../../store/commonTypes';
import type { MoveFunc } from '../../components';
import { useCards } from '../../store/useCards';
import { Div, ListDraggable } from '../../components';
import { CardDroppable } from '../../components/CardDroppable';
import { Icon } from '../../theme/daisyui';
import ListCard from '../ListCard';

export type BoardListProps = {
  list: List;
  index: number;
  onRemoveList?: () => void;
  onMoveList: MoveFunc;
};

const BoardList: FC<BoardListProps> = ({
  list,
  index,
  onRemoveList,
  onMoveList,
  ...props
}) => {
  const { cards, onPrependCard, onAppendCard, onRemoveCard } = useCards(
    list.uuid
  );

  return (
    <ListDraggable id={list.uuid} index={index} onMove={onMoveList}>
      <Div
        className="p-2 m-2 border border-gray-300 rounded-lg"
        minWidth="13rem"
        {...props}
      >
        <div className="flex justify-between mb-2">
          <p className="w-32 text-sm font-bold underline line-clamp-1">
            {list.title}
          </p>
        </div>
        <div className="flex justify-between ml-2">
          <Icon
            name="remove"
            className="btn-error btn-xs"
            onClick={onRemoveList}
          />
          <div className="flex">
            <Icon
              name="post_add"
              className="btn-success btn-xs"
              onClick={onPrependCard}
            />
            <Icon
              name="playlist_add"
              className="ml-2 btn-success btn-xs"
              onClick={onAppendCard}
            />
          </div>
        </div>
        <CardDroppable droppableId={list.uuid}>
          {cards.map((card, index) => (
            <ListCard
              draggableId={card.uuid}
              key={card.uuid}
              index={index}
              card={card}
              onRemove={onRemoveCard(card.uuid)}
            />
          ))}
        </CardDroppable>
      </Div>
    </ListDraggable>
  );
};

export default BoardList;
