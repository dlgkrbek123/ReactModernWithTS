import { Title } from '../components';
import * as D from '../data';
import Card from './Card';

const CardContainer = () => {
  return (
    <section className="mt-4">
      <Title>CardContainer</Title>
      <div className="flex flex-wrap items-center justify-center p-4 mt-4">
        {D.makeArray(10)
          .map(D.makeRandomCard)
          .map((card) => (
            <Card
              key={card.uuid}
              card={card}
              className="m-2 overflow-hidden text-xs border-2 shadow-lg rounded-xl"
              width="30rem"
              minWidth="30rem"
            />
          ))}
      </div>
    </section>
  );
};

export default CardContainer;
