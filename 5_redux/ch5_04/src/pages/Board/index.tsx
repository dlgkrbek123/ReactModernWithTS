import { useRef } from 'react';
import { useLists } from '../../store/useLists';
import { useDrop } from 'react-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { ListDroppable, Title } from '../../components';
import CreateListForm from './CreateListForm';
import BoardList from '../BoardList';

const Board = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const { lists, onCreateList, onRemoveList, onMoveList, onDragEnd } =
    useLists();
  const [_, drop] = useDrop({ accept: 'list' });

  drop(divRef);

  return (
    <section className="mt-4">
      <Title>Board</Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListDroppable className="flex p-2 mt-4">
          <div className="flex flex-wrap mt-4">
            {lists.map((list, index) => (
              <BoardList
                key={list.uuid}
                index={index}
                list={list}
                onRemoveList={onRemoveList(list.uuid)}
                onMoveList={onMoveList}
              />
            ))}
            <CreateListForm onCreateList={onCreateList} />
          </div>
        </ListDroppable>
      </DragDropContext>
    </section>
  );
};

export default Board;
