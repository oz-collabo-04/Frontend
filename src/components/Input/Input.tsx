import React, { ForwardedRef, forwardRef } from 'react';

interface InputProps {
  type: 'text' | 'password';
  width?: string;
  height?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // ref를 ForwardedRef로 타입 지정
  ref?: ForwardedRef<HTMLInputElement>;
  maxLength?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, width, height, value, placeholder, disabled = false, onChange, maxLength }, ref) => {
    return (
      <input
        type={type}
        className='comInput'
        placeholder={placeholder}
        style={{ width, height }}
        value={value}
        disabled={disabled}
        onChange={onChange}
        ref={ref} // ref를 input 요소에 연결
        maxLength={maxLength}
      />
    );
  }
);

export default Input;
