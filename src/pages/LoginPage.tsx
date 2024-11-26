import naverColor from '@/uiComponents/LoginPage/naver_logo.svg';
import kakao from '@/uiComponents/LoginPage/kakao_logo.svg';
import google from '@/uiComponents/LoginPage/google_g_logo.svg';
import '@/styles/LoginPage/login.scss';
import MainBtn from '@/components/Button/MainBtn';
import XLargeTitle from '@/components/Title/XLargeTitle';
import useLoginProviderStore from '@/store/useLoginProviderStore';

export default function LoginPage() {
  const redirectBaseURL = import.meta.env.VITE_REDIRECT_BASE_URL;
  const naverClientID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const googleClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const kakaoClientID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const { provider, setProvider } = useLoginProviderStore();

  const loginPopup = (provider: 'naver' | 'google' | 'kakao') => {
    setProvider(provider);
  };
  let url = '';

  switch (provider) {
    case 'naver':
      url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientID}&redirect_uri=${redirectBaseURL}/naver/callback/&state=1234`;
      break;
    case 'google':
      url = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${googleClientID}&redirect_uri=${redirectBaseURL}/google/callback/&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&prompt=select_account`;
      break;
    case 'kakao':
      url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientID}&redirect_uri=${redirectBaseURL}/kakao/callback/&state=1234`;
      break;
  }

  window.open(url, `${provider}loginPopup`, 'width=600,height=600,left=400,top=100');

  // const naverLoginPopup = () => {
  //   setProvider('naver');
  //   window.open(`@`, 'NaverLoginPopup', 'width=600,height=600,left=400,top=100');
  // };
  // const googleLoginPopup = () => {
  //   setProvider('google');
  //   window.open(
  //     `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${googleClientID}&redirect_uri=${redirectBaseURL}/google/callback/&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&prompt=select_account`,
  //     'GoogleLoginPopup',
  //     'width=600,height=600,left=400,top=100'
  //   );
  // };

  // const kakaoLoginPopup = () => {
  //   setProvider('kakao');
  //   window.open(
  //     `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientID}&redirect_uri=${redirectBaseURL}/kakao/callback/&state=1234`,
  //     'popup',
  //     'width=600,height=600,left=400,top=100'
  //   );
  // };

  return (
    <>
      <div className='loginPage'>
        <div className='loginContainer'>
          <div className='loginWrapper'>
            <XLargeTitle title='Login' />
            <div className='buttonBox'>
              <MainBtn
                onClick={() => {
                  loginPopup('naver');
                }}
                img={<img className='logo' src={naverColor} alt='네이버 로고' />}
                name='네이버 로그인'
                extraClass='naver'
              />
              <MainBtn
                onClick={() => {
                  loginPopup('kakao');
                }}
                img={<img className='logo' src={kakao} alt='카카오 로고' />}
                name='카카오 로그인'
                extraClass='kakao'
              />
              <MainBtn
                onClick={() => {
                  loginPopup('google');
                }}
                img={<img className='logo' src={google} alt='구글 로고' />}
                name='google 로그인'
                extraClass='google'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
