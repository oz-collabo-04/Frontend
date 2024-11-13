interface InputProps {
  type: 'text' | 'password' | 'number';
  width?: string;
  height?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, width, height, placeholder, disabled, onChange }: InputProps) => {
  return (
    <input
      type={type}
      className='comInput'
      placeholder={placeholder}
      style={{ width, height }}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Input;
