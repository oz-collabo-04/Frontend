import apiClient from '@/api/apiClient';
import XSmallTitle from '@/components/Title/XSmallTitle';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function GoogleCallbackPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const naverLogin = async () => {
  //     try {
  //       const params = new URLSearchParams(location.search);
  //       const authCode = params.get('code'); // 네이버에서 반환된 URL에 존재하는 코드
  //       const state = params.get('state');

  //       if (authCode) {
  //         const response = await apiClient.get(`/naver/callback`, {
  //           code: authCode,
  //           state: state,
  //         });
  //         console.log('Login Success', response.data);

  //         //토큰 저장 및 리다이렉트 로직

  //         const { token } = response.data;
  //         localStorage.setItem('token', token);
  //         // window.close();
  //         // window.opener.location.replace('/');
  //       } else {
  //         console.error('인가 코드가 정상적으로 전달되지 않았습니다.');
  //       }
  //     } catch (error) {
  //       console.error('login error', error);
  //     }
  //   };
  //   naverLogin();
  // }, [location, navigate]);

  useEffect(() => {
    const googleLogin = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const authCode = params.get('code');

        console.log('Auth Code:', authCode);

        if (authCode) {
          const response = await apiClient.post(`/google/callback/`, {
            code: authCode,
          });
          console.log('Full Response:', response);

          const {access_token } = response.data; // 데이터 구조 확인 후 수정
          if (access_token) {
            localStorage.setItem('token', access_token);
            window.close();
            window.opener.location.replace('/');
          } else {
            console.error('Token not found in response:', response.data);
          }
        } else {
          console.error('인가 코드가 정상적으로 전달되지 않았습니다.');
        }
      } catch (error) {
        console.error('login error', error);
      }
    };
    googleLogin();
  }, [location, navigate]);

  return (
    <>
      <XSmallTitle title='Naver 로그인 처리가 진행 중입니다....' />
    </>
  );
}
