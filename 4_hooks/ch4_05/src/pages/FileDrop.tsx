import type { ChangeEvent, DragEvent } from 'react';
import { useState, useRef, useCallback, useMemo } from 'react';
import { useToggle } from '../hooks';
import { imageFileReaderP } from '../utils';
import { Title, Div } from '../components';

const FileDrop = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, toggleLoading] = useToggle(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const makeImageUrls = useCallback((files: File[]) => {
    const promises = Array.from(files).map(imageFileReaderP);
    toggleLoading();

    Promise.all(promises)
      .then((urls) => setImageUrls((prev) => [...urls, ...prev]))
      .catch(setError)
      .finally(toggleLoading);
  }, []);

  const onDivClick = useCallback(() => {
    inputRef.current?.click();
  }, []);
  const onDivDragOver = useCallback((e: DragEvent) => e.preventDefault(), []);
  const onDivDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setError(null);

    const files = e.dataTransfer?.files;
    files && makeImageUrls(Array.from(files));
  }, []);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setError(null);

    const files = e.target.files;
    files && makeImageUrls(Array.from(files));
  }, []);

  return (
    <section className="mt-4">
      <Title>FileDrop</Title>
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}

      <div
        className="w-full mt-4 bg-gray-200 border border-gray-500"
        onClick={onDivClick}
      >
        {loading && (
          <div className="flex justify-center items-center">
            <button className="btn btn-circle loading"></button>
          </div>
        )}

        <div
          className="flex flex-col justify-center items-center h-40 cursor-pointer"
          onDragOver={onDivDragOver}
          onDrop={onDivDrop}
        >
          <p className="text-3xl font-bold">drop images or click me</p>
        </div>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          ref={inputRef}
          multiple
          onChange={onInputChange}
        />
      </div>
      <div className="flex justify-cetner flex-wrap">
        {imageUrls.map((url, idx) => {
          return (
            <Div
              key={idx}
              src={url}
              className="m-2 bg-transparent bg-center bg-no-repeat bg-contain"
              width="5rem"
              height="5rem"
            />
          );
        })}
      </div>
    </section>
  );
};

export default FileDrop;
