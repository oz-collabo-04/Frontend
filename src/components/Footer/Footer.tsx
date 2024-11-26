import '@/styles/footer.scss';
import '@/global.scss';
import MainBtn from '../Button/MainBtn';
import kakao from '@/uiComponents/LoginPage/kakao_logo.svg';

const Footer = () => {
  return (
    <footer className='footerBar'>
      <div className='contentLayout'>
        <div className='contents'>
          <div className='infoWrapper'>
            <div className='company'>
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
              <div className='policy'>
                <a
                  href='https://www.sonewwedding.com/13022500-6206-80b4-892d-f7358230dc56'
                  className='link-style'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  이용약관
                </a>
                <div>|</div>
                <a
                  href='https://www.sonewwedding.com/13022500-6206-800e-b533-fefd6484fef8'
                  className='link-style'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  개인정보 처리방침
                </a>
              </div>
            </div>
            <div className='info'>
              <MainBtn
                img={<img className='logo' src={kakao} alt='카카오로고' />}
                name='카카오톡 문의'
                extraClass='inquiry'
                onClick={() => window.open('https://pf.kakao.com/_BxkaYG/chat?bot=true')}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
