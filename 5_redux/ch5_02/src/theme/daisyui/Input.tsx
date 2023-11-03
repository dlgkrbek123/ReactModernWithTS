import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type inputProps = ReactInputProps & {};

export const Input = forwardRef<HTMLInputElement, inputProps>((props, ref) => {
  const { className: _className, ...inputProps } = props;
  const className = ['input', _className].join(' ');

  return <input className={className} ref={ref} {...inputProps} />;
});
