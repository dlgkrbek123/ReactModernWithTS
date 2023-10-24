import { useClock } from './hooks';
import Clock from './pages/Clock';

function App() {
  const today = useClock();

  return (
    <main>
      <Clock today={today} />
    </main>
  );
}

export default App;
