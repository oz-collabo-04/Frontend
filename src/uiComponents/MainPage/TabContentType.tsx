import ProfileBadge from '@/components/Badge/ProfileBadge';

interface tabContentsTypeProps {
  src: string;
  title: string;
  name: string;
  description: string;
}

export default function TabContentType({ src, title, name, description }: tabContentsTypeProps) {
  return (
    <>
      <div className='tabContentsType'>
        <ProfileBadge src={src} />
        <div className='tabText'>
          <div className='tabContentTitle'>{title}</div>
          <div className='expertName'>
            {name} <span>전문가</span>
          </div>
          <div className='expertDescription'>{description}</div>
        </div>
      </div>
    </>
  );
}
