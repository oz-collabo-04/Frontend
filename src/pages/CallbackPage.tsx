import { client } from '@/api/axiosInstance';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import useLoginProviderStore from '@/store/useLoginProviderStore';
import '@/styles/CallbackPage/callbackPage.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LoginProps {
  code: string | null;
  state?: string | null;
}

export default function CallbackPage() {
  const location = useLocation();
  const { provider } = useLoginProviderStore();

  useEffect(() => {
    const socialLoginHandler = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const authCode = params.get('code');
        const state = params.get('state');

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
            };
            window.opener.postMessage(data, 'http://localhost:5173');
            window.opener.postMessage(data, 'https://sonew-wedding.kro.kr');
            window.opener.location.href = '/';
            window.close();
          }
        }
      } catch {
        // console.error('login error', error);
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
