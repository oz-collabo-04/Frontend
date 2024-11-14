import '@/styles/Badge.scss';

interface ProfileBadgeProps {
  width?: number;
  height?: number;
  src?: string;
  borderRadius?: number;
}

export default function ProfileBadge({
  width = 120,
  height = 120,
  src,
  borderRadius = 15
}: ProfileBadgeProps) {
  const defaultColor = '#FFD800';

  return (
    <div 
      className="profile-badge" 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`, 
        borderRadius: `${borderRadius}px`,
        backgroundColor: src ? 'transparent' : defaultColor
      }}
    >
      {src ? (
        <img 
          src={src}
          alt="Profile Badge"
          className="profile-badge-icon"
        />
      ) : null}
    </div>
  );
}