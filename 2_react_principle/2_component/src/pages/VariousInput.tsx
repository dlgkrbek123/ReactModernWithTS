import type { FC, PropsWithChildren } from 'react';

const VariousInput: FC<PropsWithChildren<any>> = (props) => {
  return (
    <div>
      <p>VariousInput</p>
      <div>
        <input type="text" placeholder="enter some texts" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" value="I'm a button" />
        <input type="checkbox" value="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  );
};

export default VariousInput;
