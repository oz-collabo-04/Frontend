import ProfileBadge from '@/components/Badge/ProfileBadge';
import SmallTitle from '@/components/Title/SmallTitle';

interface tabContentsTypeProps {
  src: string;
  title: string;
  name: string;
  description: string;
}

export default function TabContentType1({ src, title, name, description }: tabContentsTypeProps) {
  return (
    <>
      <div className='tabContentsType1'>
        <div>
          <ProfileBadge width='150' height='150' defaultColor='#FFE14D' src={src} />
        </div>
        <div className='tabText'>
          <SmallTitle title={title} />
          <div className='expertName'>
            {name} <span>전문가</span>
          </div>
          <div className='expertDescription'>{description}</div>
        </div>
      </div>
    </>
  );
}
