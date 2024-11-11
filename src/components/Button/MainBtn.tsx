interface BtnProps {
  name: string;
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  backgroundColor?: string;
}

const MainBtn = ({ name, size, disabled, backgroundColor }: BtnProps) => {
  return (
    <button className={`mainBtn ${size}`} style={{ backgroundColor }} disabled={disabled}>
      {name}
    </button>
  );
};

export default MainBtn;
