import { useStore } from './store';
import { Provider as ReduxProvider } from 'react-redux';
import ReduxClock from './pages/ReduxClock';
import UserReducerClock from './pages/UserReducerClock';

const App = () => {
  const store = useStore();

  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UserReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  );
};

export default App;
