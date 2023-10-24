import type { FC } from 'react';
import { Div, Title, Subtitle } from '../components';

export type ClockProps = {
  today: Date;
};

const Clock: FC<ClockProps> = ({ today }) => {
  return (
    <Div className="flex flex-col justify-center items-center h-screen bg-primary">
      <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="">{today.toLocaleDateString()}</Subtitle>
    </Div>
  );
};

export default Clock;
