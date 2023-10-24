import NumberState from './pages/NumberState';
import InputTest from './pages/InputTest';
import ShowHideModal from './pages/ShowHideModal';
import RadioInputTest from './pages/RadioInputTest';
import HighOrderRadioInputTest from './pages/HighOrderRadioInputTest';
import BasicForm from './pages/BasicForm';
import ObjectState from './pages/ObjectState';
import ArrayState from './pages/ArrayState';

const App = () => {
  return (
    <main>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HighOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </main>
  );
};

export default App;
