import type { DragEvent } from 'react';

const DragDrop = () => {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('onDragStart', e.dataTransfer);
  };
  const onDragEnter = (e: DragEvent<HTMLElement>) => {
    console.log('onDragEnd', e.dataTransfer);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
  };
  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    console.log('onDrop', e.dataTransfer);
  };

  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnter}>
        <h1>Drag Me</h1>
      </div>

      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop over Me</h1>
      </div>
    </div>
  );
};

export default DragDrop;
