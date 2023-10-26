import { useState, useCallback } from 'react';
import { Title, Div } from '../components';
import { Icon } from '../theme/daisyui';
import * as D from '../data';

const ArrayState = () => {
  const [images, setImages] = useState<string[]>([]);

  const addImage = useCallback(() => {
    setImages((prev) => [D.randomImage(200, 100, 50), ...prev]);
  }, []);
  const clearImage = useCallback(() => setImages([]), []);

  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        <div data-tip="add image" className="tooltip">
          <Icon name="add" className="mr-12 btn-primary" onClick={addImage} />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="clear_all" onClick={clearImage} />
        </div>
      </div>
      <div className="flex justify-center flex-wrap mt-4 mx-auto">
        {images.map((src, idx) => {
          return (
            <Div
              key={idx}
              src={src}
              className="w-1/5 m-2"
              height="5rem"
              minHeight="5rem"
            />
          );
        })}
      </div>
    </section>
  );
};

export default ArrayState;
