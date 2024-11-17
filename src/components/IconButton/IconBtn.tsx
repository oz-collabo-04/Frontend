import { useState } from 'react';

interface IconBtnProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
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
  src,
  alt,
  fallbackSrc = '/image/default_user_icon.svg',
  isFull,
  onClick,
}: IconBtnProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleError = () => {
    setImgSrc(fallbackSrc); // 대체 이미지로 변경
  };

  return (
    <button className='iconBtn' style={{ width, height, backgroundColor }} onClick={onClick}>
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
