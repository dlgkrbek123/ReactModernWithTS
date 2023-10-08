import type { FC } from 'react';
import EventListener from './pages/EventListener';
import OnClick from './pages/OnClick';
import ReactOnClick from './pages/ReactOnClick';
import DispatchEvent from './pages/DispatchEvent';
import EventBubbling from './pages/EventBubbling';
import StopPropagation from './pages/StopPropagation';
import VariousInput from './pages/VariousInput';
import OnChange from './pages/OnChange';
import Fileinput from './pages/Fileinput';
import DragDrop from './pages/DragDrop';
import FileDrop from './pages/FileDrop';

const App: FC = () => {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <Fileinput />
      <OnChange />
      <VariousInput />
      <StopPropagation />
      {/* <EventBubbling />
      <DispatchEvent />
      <ReactOnClick />
      <OnClick /> */}
      <EventListener />
    </div>
  );
};

export default App;
