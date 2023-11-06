import type { DropResult } from 'react-beautiful-dnd';
import type { AppState } from './AppState';
import type { List } from './commonTypes';
import { useSelector, useDispatch } from 'react-redux';
import * as LO from './listidOrders';
import * as L from './listEntities';
import * as C from './cardEntities';
import * as LC from './listidCardidOrders';
import * as U from '../utils';

export const useLists = () => {
  const lists = useSelector<AppState, List[]>(
    ({ listidOrders, listEntities }) =>
      listidOrders.map((uuid) => listEntities[uuid])
  );
  const listidCardidOrders = useSelector<AppState, LC.State>(
    ({ listidCardidOrders }) => listidCardidOrders
  );
  const listidOrders = useSelector<AppState, LO.State>(
    ({ listidOrders }) => listidOrders
  );
  const dispatch = useDispatch();

  const onCreateList = (uuid: string, title: string) => {
    dispatch(LO.addListidToOrders(uuid));
    dispatch(L.addList({ uuid, title }));
    dispatch(LC.setListidCardids({ listid: uuid, cardids: [] }));
  };
  const onRemoveList = (listid: string) => () => {
    listidCardidOrders[listid].forEach((cardid) => {
      dispatch(C.removeCard(cardid));
    });
    dispatch(LC.removeListid(listid));
    dispatch(L.removeList(listid));
    dispatch(LO.removeListidFromOrders(listid));
  };
  const onMoveList = (dragIndex: number, hoverIndex: number) => {
    const newOrders = listidOrders.map((item, index) => {
      return index === dragIndex
        ? listidOrders[hoverIndex]
        : index === hoverIndex
        ? listidOrders[dragIndex]
        : item;
    });
    dispatch(LO.setListidOrders(newOrders));
  };

  const onDragEnd = (result: DropResult) => {
    const destinationListid = result.destination?.droppableId;
    const destinationCardIndex = result.destination?.index;

    if (destinationListid !== undefined && destinationCardIndex !== undefined) {
      const sourceListid = result.source.droppableId;
      const sourceCardIndex = result.source.index;

      if (destinationListid === sourceListid) {
        const cardidOrders = listidCardidOrders[destinationListid];

        dispatch(
          LC.setListidCardids({
            listid: destinationListid,
            cardids: U.swapItemsInArray(
              cardidOrders,
              sourceCardIndex,
              destinationCardIndex
            ),
          })
        );
      } else {
        const sourceCardidOrders = listidCardidOrders[sourceListid];
        const destinationCardidOrders = listidCardidOrders[destinationListid];

        dispatch(
          LC.setListidCardids({
            listid: sourceListid,
            cardids: U.removeItemAtIndexInArray(
              sourceCardidOrders,
              sourceCardIndex
            ),
          })
        );
        dispatch(
          LC.setListidCardids({
            listid: destinationListid,
            cardids: U.insertItemAtIndexInArray(
              destinationCardidOrders,
              destinationCardIndex,
              result.draggableId
            ),
          })
        );
      }
    }
  };

  return {
    lists,
    onCreateList,
    onRemoveList,
    onMoveList,
    onDragEnd,
  };
};
