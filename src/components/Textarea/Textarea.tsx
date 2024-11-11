interface TextareaProps {
  width?: string;
  height?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Textarea = ({ width, height, placeholder, disabled }: TextareaProps) => {
  return <textarea className='comTextarea' placeholder={placeholder} style={{ width, height }} disabled={disabled} />;
};

export default Textarea;
