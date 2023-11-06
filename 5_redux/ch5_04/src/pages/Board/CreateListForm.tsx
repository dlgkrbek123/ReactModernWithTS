import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';
import * as D from '../../data';
import { Icon } from '../../theme/daisyui';

export type CreateListFormProps = {
  onCreateList: (uuid: string, title: string) => void;
};

const CreateListForm: FC<CreateListFormProps> = ({ onCreateList }) => {
  const [value, setValue] = useState<string>(D.randomTitleText());

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const addList = () => {
    onCreateList(D.randomUUID(), value);
    setValue(D.randomTitleText());
  };

  return (
    <div className="flex p-2">
      <input
        className="input-xs input-bordered input input-primary"
        placeholder="title"
        value={value}
        onChange={onChange}
      />
      <Icon
        className="ml-2 bnt-primary btn-xs"
        name="add"
        onClick={addList}
        disabled={!value.length}
      />
    </div>
  );
};

export default CreateListForm;
