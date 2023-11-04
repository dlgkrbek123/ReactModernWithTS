import type { AppState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import * as D from '../data';
import * as E from '../store/errorMessage';
import { Title } from '../components';
import { Button } from '../theme/daisyui';

const ErrorMessageTest = () => {
  const errorMessage = useSelector<AppState, E.State>(
    ({ errorMessage }) => errorMessage
  );
  const dispatch = useDispatch();

  const generateErrorMessage = () => {
    dispatch<any>(E.generateErrorMessage(D.randomSentence()));
  };

  return (
    <section className="mt-4">
      <Title>ErrorMessageTest</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button
            className="btn btn-sm btn-primary"
            onClick={generateErrorMessage}
          >
            generate error message
          </Button>
        </div>
        {errorMessage.length && (
          <div className="flex items-center justify-center bg-red-200">
            <p className="text-2xl text-red-600 text-bold">
              error: {errorMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ErrorMessageTest;
