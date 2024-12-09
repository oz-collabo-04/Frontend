import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataList } from './chat';
import { auth } from '@/api/axiosInstance';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import { formatDate } from '@/utils/formatDate';

interface ChatListProps {
  status?: string; //상태에 따른 쿼리 파라미터
}

const ChatList = ({ status }: ChatListProps) => {
  const [chatData, setChatData] = useState<DataList>([]);

  // 채팅방 리스트 GET 요청
  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await auth.get('/chat/chatrooms/', {
          params: status ? { status } : undefined,
        });
        setChatData(response.data);
      } catch (error) {
        console.log('API 요청에 실패했습니다 :', error);
      }
    };
    fetchChatList();
  }, [status]);

  const userId = sessionStorage.getItem('user_id');

  return (
    <div className='chatListContainer'>
      <div className='chatList'>
        {chatData?.map((data) => {
          const isExpert = data.expert.user.id === Number(userId);
          return (
            <Link to={`/chatpage/${data.id}`} state={data} className='chat' key={data.id}>
              <div className='chatPreview'>
                <div className='chatPreviewBox' key={data.id}>
                  <ProfileBadge
                    src={isExpert ? data.user.profile_image : data.expert.expert_image}
                    width='10rem'
                    height='10rem'
                  />
                  <div className='chatContent'>
                    <span className='userName'>{isExpert ? data.user.name : data.expert.user.name}</span>
                    <ul className='requestList'>
                      <li>{data.estimation.request.service_list_display}</li>
                      <li>{data.estimation.request.location_display}</li>
                      <li>{data.user.name}</li>
                      <li>{formatDate(data.estimation.request.wedding_datetime)}</li>
                      {data.estimation.request.is_reception && <li>2부</li>}
                    </ul>
                    <p className='lastChat'>{data.last_message}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
