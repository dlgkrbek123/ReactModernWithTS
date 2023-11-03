import { useStore } from './store';
import { Provider as ReduxProvider } from 'react-redux';
import ClockTest from './pages/ClockTest';
import CounterTest from './pages/CounterTest';
import RemoteUserTest from './pages/RemoteUserTest';
import CardsTest from './pages/CardsTest';

const App = () => {
  const store = useStore();

  return (
    <ReduxProvider store={store}>
      <CardsTest />
      <RemoteUserTest />
      <CounterTest />
      <ClockTest />
    </ReduxProvider>
  );
};

export default App;
