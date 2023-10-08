import type { FC } from 'react';

const rootDIv = document.getElementById('root');
if (rootDIv) {
  rootDIv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e;
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles);
  };
  rootDIv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e;
    console.log(
      'mouse click also occurs on rootDIv',
      isTrusted,
      target,
      bubbles
    );
  };
}

const OnClick: FC<any> = (props) => {
  return <div>OnClick</div>;
};

export default OnClick;
