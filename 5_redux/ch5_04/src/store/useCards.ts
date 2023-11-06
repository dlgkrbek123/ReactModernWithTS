import type { AppState } from './index';
import type { Card, UUID } from './commonTypes';
import { useSelector, useDispatch } from 'react-redux';
import * as C from './cardEntities';
import * as LC from './listidCardidOrders';
import * as D from '../data';

export const useCards = (listid: UUID) => {
  const cards = useSelector<AppState, Card[]>(
    ({ cardEntities, listidCardidOrders }) =>
      listidCardidOrders[listid].map((uuid) => cardEntities[uuid])
  );
  const dispatch = useDispatch();

  const onPrependCard = () => {
    const card = D.makeRandomCard();

    dispatch(C.addCard(card));
    dispatch(LC.prependCardidToListid({ listid, cardid: card.uuid }));
  };

  const onAppendCard = () => {
    const card = D.makeRandomCard();

    dispatch(C.addCard(card));
    dispatch(LC.appendCardidToListid({ listid, cardid: card.uuid }));
  };

  const onRemoveCard = (uuid: UUID) => () => {
    dispatch(C.removeCard(uuid));
    dispatch(LC.removeCardIdFromListId({ listid, cardid: uuid }));
  };

  return {
    cards,
    onPrependCard,
    onAppendCard,
    onRemoveCard,
  };
};
