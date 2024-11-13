import React from 'react';

interface RadioProps {
  idFor: string;
  content?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({ idFor, content, checked, disabled, name, onChange }: RadioProps) => {
  return (
    <span className='rdoBox'>
      <input type='radio' id={idFor} checked={checked} disabled={disabled} name={name} onChange={onChange} />
      <label htmlFor={idFor}>{content}</label>
    </span>
  );
};

export default Radio;
