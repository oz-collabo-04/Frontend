import client from '@/api/client';
import XSmallTitle from '@/components/Title/XSmallTitle';
import useLoginProviderStore from '@/store/useLoginProviderStore';
import useUserStateStore from '@/store/useUserStateStore';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LoginProps {
  code: string | null;
  state?: string | null;
}

export default function CallbackPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUserStateStore();
  const { provider } = useLoginProviderStore();

  useEffect(() => {
    const socialLoginHandler = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const authCode = params.get('code');
        const state = params.get('state');

        console.log('Auth Code:', authCode);
        console.log('State:', state);

        const requestData: LoginProps = {
          code: authCode,
        };

        if (provider === 'naver' && state) {
          requestData.state = state;
        }

        const response = await client.post(`/users/login/${provider}/callback/`, requestData);
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
      } catch (error) {
        console.error('login error', error);
      }
    };
    socialLoginHandler();
  }, [location, navigate, provider, setIsLoggedIn]);

  return (
    <>
      <XSmallTitle title='로그인 중입니다....' />
    </>
  );
}
