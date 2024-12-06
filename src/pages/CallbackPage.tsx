import { client } from '@/api/axiosInstance';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import useLoginToastStateStore from '@/store/loginToastStateStore';
import useModeChangerStore from '@/store/modeChangerStore';
import useLoginProviderStore from '@/store/useLoginProviderStore';
import useUserStateStore from '@/store/useUserStateStore';
import '@/styles/CallbackPage/callbackPage.scss';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LoginProps {
  code: string | null;
  state?: string | null;
}

export default function CallbackPage() {
  const location = useLocation();
  const { setIsLoggedIn, setIsExpert, setUserName } = useUserStateStore();
  const { setMode } = useModeChangerStore();
  const { provider } = useLoginProviderStore();
  const { setIsLoginToastShown } = useLoginToastStateStore();

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
        } else if (provider === 'google' || provider === 'kakao') {
          requestData.state = null;
        }
        const response = await client.post(`/users/login/${provider}/callback/`, requestData);
        console.log('Response:', response);
        const { access_token } = response.data;
        console.log(typeof access_token);
        const { email, id, is_expert, name, profile_image } = response.data.user;
        if (access_token) {
          if (window.opener) {
            const data = {
              access_token,
              email,
              id,
              profile_image,
              is_expert,
              name,
              //로그인 상태, 로그인토스트 상태, 모드 상태 부모창에서 변경 필요함!!!!
            };
            console.log(data.access_token);
            window.opener.postMessage(data, 'http://localhost:5173');
            window.opener.postMessage(data, 'https://sonew-wedding.kro.kr');
            window.opener.location.href = '/';
            window.close();
          }
        } else {
          console.error('AT를 찾을 수 없습니다 :', response.data);
        }
      } catch (error) {
        console.error('login error', error);
      }
    };
    socialLoginHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='loginLoadingSpinnerBox'>
      <LoadingSpinner />
    </div>
  );
}
