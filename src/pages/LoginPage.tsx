import naverColor from '@/uiComponents/LoginPage/naver_logo.svg';
import kakao from '@/uiComponents/LoginPage/kakao_logo.svg';
import google from '@/uiComponents/LoginPage/google_g_logo.svg';
import '@/styles/LoginPage/login.scss';
import MainBtn from '@/components/Button/MainBtn';
import XLargeTitle from '@/components/Title/XLargeTitle';

export default function LoginPage() {
  const redirectBaseURL = import.meta.env.VITE_REDIRECT_BASE_URL;
  const naverClientID = import.meta.env.VITE_NAVER_CLIENT_ID;

  const naverLoginPopup = () => {
    window.open(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientID}&redirect_uri=${redirectBaseURL}/naver/callback/&state=1234`,

      'NaverLoginPopup',
      'width=300,height=600,left=400,top=100'
    );
  };
  const googleLoginPopup = () => {
    window.open(
      'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=239548731889-3s3err4pb21tc1dkub03b5cgj7kkf74s.apps.googleusercontent.com&redirect_uri=http://localhost/api/v1/users/login/google/callback/&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&prompt=select_account',
      'GoogleLoginPopup',
      'width=500,height=600,left=400,top=100'
    );
  };

  return (
    <>
      <div className='loginPage'>
        <div className='loginContainer'>
          <XLargeTitle title='Login' />
          <div className='loginText'></div>
          <MainBtn
            onClick={naverLoginPopup}
            img={<img className='logo' src={naverColor} alt='네이버 로고' />}
            name='네이버로 시작하기'
            size='large'
            extraClass='loginBtn naver'
          />
          <MainBtn
            img={<img className='logo' src={kakao} alt='카카오 로고' />}
            name={'카카오로 시작하기'}
            size='large'
            extraClass='loginBtn kakao'
          />
          <MainBtn
            onClick={googleLoginPopup}
            img={<img className='logo' src={google} alt='구글 로고' />}
            name={'google로 시작하기'}
            size='large'
            extraClass='loginBtn google'
          />
        </div>
        <div></div>
      </div>
    </>
  );
}
