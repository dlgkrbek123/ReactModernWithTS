import type { ReactInputProps } from './Input';
import { forwardRef, useRef, useMemo, useImperativeHandle } from 'react';

export type ValidatableInputMethods = {
  validate: () => [boolean, string];
};

export const ValidatableInput = forwardRef<
  ValidatableInputMethods,
  ReactInputProps
>(({ type, className: _className, ...inputProps }, methodsRef) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const className = useMemo(
    () => ['input', _className].join(' '),
    [_className]
  );

  useImperativeHandle(
    methodsRef,
    () => ({
      validate: (): [boolean, string] => {
        const value = inputRef.current?.value;

        if (!value || !value.length) {
          return [false, '사용자가 입력한 내용이 없습니다'];
        }

        switch (type) {
          case 'email': {
            const regEx =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const valid = regEx.test(value);

            return valid ? [true, value] : [false, '틀린 이메일 주소입니다'];
          }
        }

        return [true, value];
      },
    }),
    [type]
  );

  return <input className={className} ref={inputRef} {...inputProps} />;
});
