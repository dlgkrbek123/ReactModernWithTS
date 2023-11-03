import type { AppState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import * as C from '../store/counter';
import { Title, Subtitle } from '../components';
import { Icon } from '../components';

const CounterTest = () => {
  const counter = useSelector<AppState, C.State>(({ counter }) => counter);
  const dispatch = useDispatch();

  const increase = () => dispatch(C.increaseCounter());
  const decrease = () => dispatch(C.decreaseCounter());

  return (
    <section className="mt-4">
      <Title>CounterTest</Title>
      <div className="flex justify-center p-4 mt-4">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon name="add_circle" onClick={increase} />
          <Subtitle>{counter}</Subtitle>
          <Icon name="remove_circle" onClick={decrease} />
        </div>
      </div>
    </section>
  );
};

export default CounterTest;
