import UseOrCreateTest from './pages/UseOrCreateTest';
import Memo from './pages/Memo';
import Callback from './pages/Callback';
import HighOrderCallback from './pages/HighOrderCallback';

const App = () => {
  return (
    <main>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </main>
  );
};

export default App;
