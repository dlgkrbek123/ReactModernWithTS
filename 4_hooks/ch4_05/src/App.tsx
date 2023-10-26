import ClickTest from './pages/ClickTest';
import FileDrop from './pages/FileDrop';
import InputFocusTest from './pages/InputFocusTest';
import ForwardRefTest from './pages/ForwardRefTest';
import ValidatableInputTest from './pages/ValidatableInputTest';

const App = () => {
  return (
    <main>
      <ClickTest />
      <FileDrop />
      <InputFocusTest />
      <ForwardRefTest />
      <ValidatableInputTest />
    </main>
  );
};

export default App;
