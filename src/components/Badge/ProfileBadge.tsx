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
  borderRadius = 15,
  className = "",
  defaultColor = '#FFD800',
}: ProfileBadgeProps) {

  return (
    <div 
      className={`profileBadge extraClass ${className}`.trim()}
      style={{ 
        width, 
        height, 
        borderRadius: `${borderRadius}px`,
        backgroundColor: src ? 'transparent' : defaultColor
      }}
    >
      {src && (
        <img 
          src={src}
          alt="Profile Badge"
          className="profileBadgeIcon extraIconClass"
          style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
        />
      )}
    </div>
  )
}