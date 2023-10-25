import type { FormEvent, ChangeEvent } from 'react';
import { useState, useCallback } from 'react';
import { Title } from '../components';

const BasicForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const onNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);
  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);

      alert(JSON.stringify(Object.fromEntries(formData), null, 2));
    },
    [name, email]
  );

  return (
    <section className="mt-4">
      <Title>Basic Form</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <input
              id="name"
              className="input input-primary"
              placeholder="enter your name"
              value={name}
              onChange={onNameChange}
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">email</span>
            </label>
            <input
              id="email"
              type="email"
              className="input input-primary"
              placeholder="enter your email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              className="w-1/2 btn btn-sm btn-primary"
              type="submit"
              value="Submit"
            />
            <input defaultValue="Cancel" className="w-1/2 ml-4 btn btn-sm" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BasicForm;
