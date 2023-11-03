import type { AppState } from '../../store';
import { useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as D from '../../data';
import * as C from '../../store/cards';
import { Title } from '../../components';
import { Icon } from '../../theme/daisyui';
import Card from './Card';

const makeCard = () =>
  D.makeCard(
    D.randomUUID(),
    D.makeRandomUser(),
    D.randomImage(200, 100),
    '',
    '',
    '',
    ''
  );

const CardsTest = () => {
  const cards = useSelector<AppState, C.State>(({ cards }) => cards);

  const dispatch = useDispatch();
  const addCard = useCallback(() => dispatch(C.addCard(makeCard())), []);
  const removeCard = useCallback(
    (id: string) => () => dispatch(C.removeCard(id)),
    []
  );

  useEffect(() => {
    addCard();
  }, []);

  return (
    <section className="mt-4">
      <Title>CardsTest</Title>
      <div className="flex justify-center mt-4">
        <Icon name="add" className="btn-primary" onClick={addCard} />
      </div>
      <div className="flex flex-wrap mt-4">
        {cards.map((card) => (
          <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
        ))}
      </div>
    </section>
  );
};

export default CardsTest;
