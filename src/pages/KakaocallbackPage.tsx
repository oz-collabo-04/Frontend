// import apiClient from '@/api/apiClient';
// import XSmallTitle from '@/components/Title/XSmallTitle';
// import useUserStateStore from '@/store/useUserStateStore';
// import { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function KakaoCallbackPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { setUserType, setIsLoggedIn } = useUserStateStore();
//   useEffect(() => {
//     const kakaoLogin = async () => {
//       try {
//         const params = new URLSearchParams(location.search);
//         const authCode = params.get('code');

//         console.log('Auth Code:', authCode);

//         if (authCode) {
//           const response = await apiClient.post(`/kakao/callback/`, {
//             code: authCode,
//           });
//           console.log('Response:', response);

//           const { access_token } = response.data; // 데이터 구조 확인 후 수정
//           if (access_token) {
//             localStorage.setItem('access_token', access_token);
//             window.close();
//             window.opener.location.replace('/');
//             setIsLoggedIn(true);
//             // setUserType(response.data.userType);
//           } else {
//             console.error('AT를 찾을 수 없습니다 :', response.data);
//           }
//         } else {
//           console.error('인가 코드가 정상적으로 전달되지 않았습니다.');
//         }
//       } catch (error) {
//         console.error('login error', error);
//       }
//     };
//     kakaoLogin();
//   }, [location, navigate, setIsLoggedIn]);

//   return (
//     <>
//       <XSmallTitle title='Kakao 로그인 중입니다....' />
//     </>
//   );
// }
