interface SelectProps {
  width?: string;
  height?: string;
  defaultValue?: string;
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  nameRef?: React.RefObject<HTMLSelectElement>;
}

const Select = ({ width, height, defaultValue, options, onChange, nameRef }: SelectProps) => {
  return (
    <select
      className='comSelect'
      style={{ width, height }}
      onChange={onChange}
      defaultValue='' // 초기값 설정
      ref={nameRef}
    >
      <option value='' disabled>
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
