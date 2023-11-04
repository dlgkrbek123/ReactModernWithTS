import type { AppState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import * as L from '../store/loading';
import { Title } from '../components';
import { Button } from '../theme/daisyui';

const LoadingTest = () => {
  const loading = useSelector<AppState, L.State>(({ loading }) => loading);
  const dispatch = useDispatch();

  const doTimedLoading = () => dispatch<any>(L.doTimedLoading(1000));

  return (
    <section className="mt-4">
      <Title>LoadingTest</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button
            className="btn-sm btn-primary"
            disabled={loading}
            onClick={doTimedLoading}
          >
            do timed loading
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <button className="btn btn-circle loading"></button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoadingTest;
