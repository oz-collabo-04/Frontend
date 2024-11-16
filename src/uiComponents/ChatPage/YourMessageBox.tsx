import ProfileBadge from '@/components/Badge/ProfileBadge';
import profile from '@/assets/images/dalbong.jpg';

const YourMessageBox = () => {
  return (
    <div className='messageBox yourMessageBox'>
      <ProfileBadge width='3.2rem' height='3.2rem' src={profile} />
      <div className='speechBubble'>
        d
        <span className='createMessageTime'>
          오후 1:30<span className='messageUnread'>안읽음</span>
        </span>
      </div>
    </div>
  );
};

export default YourMessageBox;
