// import ProfileBadge from '@/components/Badge/ProfileBadge';
// import { Link } from 'react-router-dom';
// import { auth } from '@/api/axiosInstance';
// import { useEffect, useState } from 'react';
// import { DataList } from './chat';

// const Chat = () => {

//   return (
//     <Link to='' className='chat'>
//       <div className='chatPreview'>
//         {chatData?.map((data) => {
//           // console.log(data.);
//           return (
//             <>
//               <div className='chatPreviewBox' key={data.id}>
//                 <ProfileBadge src={data.expert?.expert_image} width='10rem' height='10rem' />
//                 <div className='chatContent'>
//                   <span className='userName'>{data.expert.user.name}</span>
//                   <ul className='requestList'>
//                     <li>{data.request.service_list_display}</li>
//                     <li>{data.request.location_display}</li>
//                     <li>{data.user.name}</li>
//                     <li>년/월/일시</li>
//                     <li>2부</li>
//                   </ul>
//                   <p className='lastChat'>
//                     채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅 내용채팅
//                   </p>
//                 </div>
//               </div>
//               <span className='createMessageTime'>오후 08:09</span>
//             </>
//           );
//         })}
//       </div>
//     </Link>
//   );
// };

// export default Chat;
