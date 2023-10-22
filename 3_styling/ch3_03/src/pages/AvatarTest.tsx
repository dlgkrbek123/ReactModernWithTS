import { Div, Title, Avatar } from '../components';
import * as D from '../data';

const AvatarTest = () => {
  return (
    <section className="mt-4">
      <Title>AvatarTest</Title>
      <Div className="px-12 py-4 m-8 bg-blue-300">
        {D.range(0, 10).map((idx) => {
          return (
            <Avatar
              className="inline-block ml-6 border-4 border-white"
              key={idx}
              src={D.randomAvatar()}
            />
          );
        })}
      </Div>
    </section>
  );
};

export default AvatarTest;
