import type { ChangeEvent } from 'react';

const OnChange = () => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('onChangeValue', e.target.value);
  };
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log('onChangeChecked', e.target.checked);
  };
  const onChaneFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log('onChangeFiles', e.target.files);
    // 사용자가 선택한 파일목록 리스트
  };

  return (
    <div>
      <h1 draggable>Drag Me</h1>
      <p>OnChange</p>
      <input
        type="text"
        placeholder="type some text"
        defaultValue="Hello"
        onChange={onChangeValue}
      />
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      <input type="file" onChange={onChaneFiles} multiple accept="images/*" />
    </div>
  );
};

export default OnChange;
