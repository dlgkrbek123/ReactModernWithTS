import type { FC, PropsWithChildren } from 'react';

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const { isTrusted, target, bubbles } = e;
  console.log('mouse click occurs.', isTrusted, target, bubbles);
});

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const { isTrusted, target, bubbles } = e;
  console.log('mouse click also occurs.', isTrusted, target, bubbles);
});

const EventListener: FC<PropsWithChildren<any>> = (props) => {
  return <div>Event Listener</div>;
};

export default EventListener;
