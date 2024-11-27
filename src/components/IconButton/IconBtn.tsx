import { useState } from 'react';

interface IconBtnProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  type?: 'button' | 'submit' | 'reset';
  src: string;
  alt: string;
  fallbackSrc?: string;
  isFull?: boolean;
  onClick?: () => void;
}

const IconBtn = ({
  width,
  height,
  backgroundColor,
  type = 'button',
  src,
  alt,
  fallbackSrc = '/image/default_user_icon.svg',
  isFull = false,
  onClick,
}: IconBtnProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleError = () => {
    setImgSrc(fallbackSrc); // 대체 이미지로 변경
  };

  return (
    <button className='iconBtn' type={type} style={{ width, height, backgroundColor }} onClick={onClick}>
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        style={{
          width: isFull ? '100%' : '70%',
          height: isFull ? '100%' : '70%',
        }}
      />
    </button>
  );
};

export default IconBtn;
