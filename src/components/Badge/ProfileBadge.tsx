import '@/styles/common.scss';

interface ProfileBadgeProps {
  width?: string
  height?: string
  src?: string
  borderRadius?: number
  className?: string
  defaultColor?: string
}

export default function ProfileBadge({
  width = "120px",
  height = "120px",
  src,
  borderRadius = 10,
  className = "",
  defaultColor = '#FFD800',
}: ProfileBadgeProps) {

  // src가 있고 유효한 URL일 때만 이미지를 표시
  const showImage = src && src.startsWith('http');

  return (
    <div 
      className={`profileBadge ${className}`.trim()}
      style={{ 
        width, 
        height, 
        borderRadius: `${borderRadius}px`,
        backgroundColor: defaultColor
      }}
    >
      {showImage && (
        <img 
          src={src}
          alt=""
          className="profileBadgeIcon"
          style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: 'inherit',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  )
}