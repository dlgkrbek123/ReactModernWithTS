import { useMemo, useCallback } from 'react';
import { Title } from '../components';
import { Button } from '../theme/daisyui';
import * as D from '../data';

const Callback = () => {
  const names = useMemo(() => D.makeArray(3).map(D.randomName), []);

  const onClick = useCallback(() => alert('button clicked'), []);

  return (
    <section className="mt-4">
      <Title>Callback</Title>
      <div className="flex justify-evenly mt-4">
        {names.map((name, idx) => (
          <Button
            key={name}
            className="btn-primary normal-case btn-wide btn-xs"
            onClick={onClick}
          >
            {name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Callback;
