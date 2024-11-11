interface RadioProps {
  idFor: string;
  content?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
}

const Radio = ({ idFor, content, defaultChecked, disabled, name }: RadioProps) => {
  return (
    <span className='rdoBox'>
      <input type='radio' id={idFor} defaultChecked={defaultChecked} disabled={disabled} name={name} />
      <label htmlFor={idFor}>{content}</label>
    </span>
  );
};

export default Radio;
