import '@/styles/footer.scss';
import MainBtn from '../Button/MainBtn';
import kakao from '@/uiComponents/LoginPage/kakao_logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerBar'>
      <div className='contents'>
        <div className='flex company'>
          주소 : 서울특별시 강남대로 92길 31, 6층(역삼동)
          <br />
          쏘뉴컴퍼니
          <br />
          대표 : 권순율
          <br />
          사업자번호 : 770-01-03189
          <br />
          대표번호 : 010-4260-1691
          <br />
          대표 이메일 : info@sonewweding.com
          <br />
          쏘뉴컴퍼니 쏘뉴웨딩 SO NEW Company So New Wedding
        </div>
        <div className='flex info'>
          <MainBtn
            img={<img className='logo' src={kakao} alt='카카오로고' />}
            name='카카오톡 문의'
            width='auto'
            height='auto'
            backgroundColor='#FEE500'
            borderColor='#000000D9'
            color='#000000'
            extraClass='inquiry'
            onClick={() => window.open('https://pf.kakao.com/_BxkaYG/chat?bot=true')}
          />
          <div className='policy'>
            <Link to='/policy/conditions' className='link-style'>
              이용약관
            </Link>
            <Link to='/policy/personal' className='link-style'>
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
