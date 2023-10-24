import { useState, useCallback } from 'react';
import { Title } from '../components';
import { Icon } from '../theme/daisyui';

const NumberState = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="flex justify-center">
        <div className="flex justify-between items-center w-1/4 mt-4">
          <Icon name="add" className="btn-primary btn-lg" onClick={increment} />
          <p className="text-3xl text-bole text-primary">{count}</p>
          <Icon
            name="remove"
            className="btn-accent btn-lg"
            onClick={decrement}
          />
        </div>
      </div>
    </section>
  );
};

export default NumberState;
