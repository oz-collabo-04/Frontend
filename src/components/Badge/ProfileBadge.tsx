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
  isFull,
}: ProfileBadgeProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <div
      className={`profile-badge ${extraClass}`.trim()}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor,
      }}
    >
      <img
        src={imgSrc}
        alt='프로필 배지'
        className='profilebadge__icon'
        onError={handleError}
        style={{
          width: isFull ? '100%' : 'auto',
          height: isFull ? '100%' : 'auto',
        }}
      />
    </div>
  );
};

export default ProfileBadge;