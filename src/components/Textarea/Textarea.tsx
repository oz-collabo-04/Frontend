interface TextareaProps {
  width?: string;
  height?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ width, height, placeholder, disabled = false, onChange }: TextareaProps) => {
  return (
    <textarea
      className='comTextarea'
      placeholder={placeholder}
      style={{ width, height }}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Textarea;
