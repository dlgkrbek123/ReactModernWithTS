import type { DragEvent } from 'react';

const FIleDrop = () => {
  const onDragOver = (e: DragEvent) => e.preventDefault();
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    console.log(files.length);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        console.log(`files[${i}]: ${file?.name}`);
      }
    }
  };

  return (
    <div>
      <p>FileDrop</p>
      <div onDragOver={onDragOver} onDrop={onDrop}>
        <h1>Drop image files over Me</h1>
      </div>
    </div>
  );
};

export default FIleDrop;
