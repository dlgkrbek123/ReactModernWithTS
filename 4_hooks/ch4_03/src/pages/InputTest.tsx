import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';
import { Title } from '../components';
import { Input } from '../theme/daisyui';

const InputTest = () => {
  const [value, setValue] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const onValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onCheckedChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }, []);

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex justify-center items-center p-4 mt-4">
        <Input
          type="text"
          className="input-primary input-sm"
          value={value}
          onChange={onValueChange}
        />
        <Input
          type="checkbox"
          className="ml-4 checkebox checkbox-primary input-sm"
          checked={checked}
          onChange={onCheckedChange}
        />
      </div>
    </section>
  );
};

export default InputTest;
