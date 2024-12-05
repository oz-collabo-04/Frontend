import { ReactElement } from 'react';

interface BtnProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  img?: ReactElement;
  name: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  size?: 'default' | 'large' | 'medium' | 'small';
  extraClass?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const MainBtn = ({
  type = 'button',
  img,
  name,
  width,
  height,
  backgroundColor,
  borderColor,
  color,
  size = 'default',
  extraClass = '',
  disabled,
  onClick,
}: BtnProps) => {
  return (
    <button
      type={type}
      className={`mainBtn ${size} ${extraClass}`}
      style={{ width, height, backgroundColor, borderColor, color }}
      disabled={disabled}
      onClick={onClick}
    >
      {img}
      {name}
    </button>
  );
};

export default MainBtn;
