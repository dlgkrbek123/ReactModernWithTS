import type { ValidatableInputMethods } from '../theme/daisyui';
import { useRef, useCallback } from 'react';
import { Title } from '../components';
import { ValidatableInput } from '../theme/daisyui';

const ValidatableInputTest = () => {
  const methodsRef = useRef<ValidatableInputMethods>(null);

  const validateEmail = useCallback(() => {
    if (methodsRef.current) {
      const [valid, valueOrErrorMessage] = methodsRef.current.validate();

      if (valid) {
        alert(`${valueOrErrorMessage}는 유효한 이메일 주소입니다.`);
      } else {
        alert(valueOrErrorMessage);
      }
    }
  }, []);

  return (
    <section className="mt-4">
      <Title>ValidatableInputTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w1/3 p-2">
          <ValidatableInput
            type="email"
            className="input-primary"
            ref={methodsRef}
          />
          <button className="mt-4 btn btn-primary" onClick={validateEmail}>
            validate
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValidatableInputTest;
