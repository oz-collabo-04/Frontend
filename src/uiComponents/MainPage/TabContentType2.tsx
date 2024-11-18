import ProfileBadge from '@/components/Badge/ProfileBadge';
import SmallTitle from '@/components/Title/SmallTitle';
import defaultImg from '@/assets/images/기본이미지.jpg';

interface tabContentsTypeProps {
  src: string;
  title: string;
  name: string;
  description: string;
}

export default function TabContentType2({ src, title, name, description }: tabContentsTypeProps) {
  return (
    <>
      <>
        <div className='tabContentsType'>
          <div className='tabText'>
            <SmallTitle title={title} />
            <div className='expertName'>
              {name} <span>전문가</span>
            </div>
            <div className='expertDescription'>{description}</div>
          </div>
          <div>
            <ProfileBadge src={defaultImg} />
          </div>
        </div>
      </>
    </>
  );
}
