import apiClient from '@/api/apiClient';
import XSmallTitle from '@/components/Title/XSmallTitle';
import useLoginProviderStore from '@/store/useLoginProviderStore';
import useUserStateStore from '@/store/useUserStateStore';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CallbackPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUserStateStore();
  const { provider } = useLoginProviderStore();

  useEffect(() => {
    const naverLogin = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const authCode = params.get('code');
        const state = params.get('state');

        console.log('Auth Code:', authCode);
        console.log('State:', state);

        if (provider !== 'naver' && authCode) { //구글 카카오 소셜 로그인
          const response = await apiClient.post(`/${provider}/callback/`, {
            code: authCode,
          });
          console.log('Response:', response);

          const { access_token } = response.data;
          // const { userType } = response.data;
          if (access_token) {
            localStorage.setItem('access_token', access_token);
            // localStorage.setItem('userType', userType);
            setIsLoggedIn(true);
            // setUserType(userType);
            if (window.opener) {
              window.opener.location.href = '/';
            }
            window.close();
          } else {
            console.error('AT를 찾을 수 없습니다 :', response.data);
          }
        } else if (authCode) { // 네이버 소셜 로그인 파트
          const response = await apiClient.post(`/${provider}/callback/`, {
            code: authCode,
            state: state,
          });
          console.log('Response:', response);

          const { access_token } = response.data;
          // const { userType } = response.data;
          if (access_token) {
            localStorage.setItem('access_token', access_token);
            // localStorage.setItem('userType', userType);
            setIsLoggedIn(true);
            // setUserType(userType);
            if (window.opener) {
              window.opener.location.href = '/';
            }
            window.close();
          } else {
            console.error('AT를 찾을 수 없습니다 :', response.data);
          }
        } else {
          console.error('인가 코드가 정상적으로 전달되지 않았습니다.');
        }
      } catch (error) {
        console.error('login error', error);
      }
    };
    naverLogin();
  }, [location, navigate, provider, setIsLoggedIn]);

  return (
    <>
      <XSmallTitle title='로그인 중입니다....' />
    </>
  );
}
