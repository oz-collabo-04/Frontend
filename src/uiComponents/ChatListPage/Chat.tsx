import ProfileBadge from '@/components/Badge/ProfileBadge';
import profile from '@/assets/images/dalbong.jpg';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <Link to='' className='chat'>
      <div className='chatPreview'>
        <div className='chatPreviewBox'>
          <ProfileBadge src={profile} width='10rem' height='10rem' />
          <div className='chatContent'>
            <span className='userName'>userName</span>
            <ul className='requestList'>
              <li>결혼식 사회자</li>
              <li>서울시 서초구 웨딩홀</li>
              <li>이름</li>
              <li>년/월/일시</li>
              <li>2부</li>
            </ul>
            <p className='lastChat'>
              채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
            </p>
          </div>
        </div>
        <span className='createMessageTime'>오후 08:09</span>
      </div>
    </Link>
  );
};

export default Chat;
