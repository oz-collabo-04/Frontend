interface InputProps {
  type: 'text' | 'password' | 'number';
  width?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input = ({ type, width, placeholder, disabled }: InputProps) => {
  return <input type={type} className='comInput' placeholder={placeholder} style={{ width }} disabled={disabled} />;
};

export default Input;
