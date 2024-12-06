import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataList } from './chat';
import { auth } from '@/api/axiosInstance';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import { formatDate } from '@/utils/formatDate';

const AllChats = () => {
  const [chatData, setChatData] = useState<DataList>([]);
  console.log(chatData);

  // chat list api 호출
  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await auth.get('/chat/chatrooms/');
        // console.log('data :', response.data);
        setChatData(response.data);
      } catch (error) {
        console.log('API 요청에 실패했습니다 :', error);
      }
    };
    fetchChatList();
  }, []);

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
                      <li>2부</li>
                    </ul>
                    <p className='lastChat'>{data.last_message}</p>
                  </div>
                </div>
                <span className='createMessageTime'>오후 08:09</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllChats;
