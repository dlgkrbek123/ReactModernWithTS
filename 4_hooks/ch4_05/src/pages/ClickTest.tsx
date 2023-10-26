import { useRef, useCallback } from 'react';
import { Title } from '../components';

const ClickTest = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="flex justify-center items-center  mt-4">
        <button className="btn btn-primary mr-4" onClick={onClick}>
          Click Me
        </button>
        <input ref={inputRef} className="hidden" type="file" accept="image/*" />
      </div>
    </section>
  );
};

export default ClickTest;
