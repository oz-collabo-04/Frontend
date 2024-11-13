import React from 'react';

interface CheckboxProps {
  idFor: string;
  content?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ idFor, content, checked, disabled, name, onChange }: CheckboxProps) => {
  return (
    <span className='chkBox'>
      <input
        type='checkbox'
        id={idFor}
        checked={checked} // checked로 상태를 관리
        disabled={disabled}
        name={name}
        onChange={onChange} // onChange 핸들러
      />
      <label htmlFor={idFor}>{content}</label>
    </span>
  );
};

export default Checkbox;
