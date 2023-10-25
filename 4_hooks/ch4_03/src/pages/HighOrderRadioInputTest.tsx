import { useMemo, useState, useCallback } from 'react';
import { Title, Subtitle } from '../components';
import * as D from '../data';

const HighOrderRadioInputTest = () => {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const onChange = useCallback((idx: number) => () => setSelectedIdx(idx), []);

  return (
    <section className="mt-4">
      <Title>HighOrderRadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className="mt-4">Select Job: </Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">
            {jobTitles.map((value, idx) => {
              return (
                <label
                  key={idx}
                  className="flex justify-start cursor-pointer label"
                >
                  <input
                    type="radio"
                    name="higher jobs"
                    className="mr-4 radio radio-primary"
                    checked={idx === selectedIdx}
                    onChange={onChange(idx)}
                  />
                  <span className="label-text">{value}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighOrderRadioInputTest;
