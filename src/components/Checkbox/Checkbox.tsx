interface CheckboxProps {
  idFor: string;
  content?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
}

const Checkbox = ({ idFor, content, defaultChecked, disabled, name }: CheckboxProps) => {
  return (
    <span className='chkBox'>
      <input type='checkbox' id={idFor} defaultChecked={defaultChecked} disabled={disabled} name={name} />
      <label htmlFor={idFor}>{content}</label>
    </span>
  );
};

export default Checkbox;
