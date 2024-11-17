interface InputProps {
  type: 'text' | 'password';
  width?: string;
  height?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, width, height, value, placeholder, disabled, onChange }: InputProps) => {
  return (
    <input
      type={type}
      className='comInput'
      placeholder={placeholder}
      style={{ width, height }}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Input;
