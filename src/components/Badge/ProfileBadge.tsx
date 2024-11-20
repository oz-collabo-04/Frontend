import { useState } from 'react';
import '@/styles/common.scss';

interface ProfileBadgeProps {
  width?: string;
  height?: string;
  src?: string;
  fallbackSrc?: string;
  borderRadius?: string;
  extraClass?: string;
  backgroundColor?: string;
  isFull?: boolean;
}

const ProfileBadge = ({
  width,
  height,
  src,
  fallbackSrc = '/image/default_user_icon.svg',
  borderRadius,
  extraClass = '',
  backgroundColor,
}: ProfileBadgeProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <div
      className={`profileBadge ${extraClass}`.trim()}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
      }}
    >
      <img src={imgSrc} alt='프로필 배지' className='profileBadgeIcon' onError={handleError} />
    </div>
  );
};

export default ProfileBadge;
