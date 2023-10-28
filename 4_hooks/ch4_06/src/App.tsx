import { ResponsiveProvider } from './contexts';
import ResponsiveContextTest from './pages/ResponsiveContextTest';

const App = () => {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  );
};

export default App;
