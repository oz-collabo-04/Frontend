import { useState } from 'react';

interface IconBtnProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  isFull?: boolean;
}

const IconBtn = ({ src, alt, fallbackSrc = '/image/default_user_icon.svg', isFull }: IconBtnProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleError = () => {
    setImgSrc(fallbackSrc); // 대체 이미지로 변경
  };

  return (
    <button className='iconBtn'>
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        style={{
          width: isFull ? '100%' : '2.4rem',
          height: isFull ? '100%' : '2.4rem',
        }}
      />
    </button>
  );
};

export default IconBtn;
