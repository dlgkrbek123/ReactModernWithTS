import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Title } from '../components';

const LoggerTest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'hello', payload: 'world' });
  }, []);

  return (
    <section className="mt-4">
      <Title>LoggerTest</Title>
      <div className="mt-4"></div>
    </section>
  );
};

export default LoggerTest;
