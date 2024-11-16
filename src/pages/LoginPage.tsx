import naverColor from '@/uiComponents/LoginPage/naver_logo.svg';
import kakao from '@/uiComponents/LoginPage/kakao_logo.svg';
import google from '@/uiComponents/LoginPage/google_g_logo.svg';
import '@/styles/LoginPage/login.scss';
import MainBtn from '@/components/Button/MainBtn';
import XLargeTitle from '@/components/Title/XLargeTitle';
export default function LoginPage() {
  // const navigate = useNavigate()
  // const naverOnclick = ()=>{
  //   navigate()
  // }
  return (
    <>
      <div className='loginPage'>
        <div className='loginContainer'>
          <XLargeTitle title='Login' />
          <div className='loginText'></div>
          <MainBtn
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
