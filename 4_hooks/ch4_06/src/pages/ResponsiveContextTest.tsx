import { Title, Subtitle } from '../components';
import { useResponsive } from '../contexts';

const ResponsiveContextTest = () => {
  const breakpoint = useResponsive();

  return (
    <section className="mt-4">
      <Title>ResponsiveContextTest</Title>
      <div className="mt-4">
        <Subtitle>breakpoint: {breakpoint}</Subtitle>
      </div>
    </section>
  );
};

export default ResponsiveContextTest;
