import { Link } from 'react-router-dom';
import '@/styles/Header_Footer/header.scss';
import MainBtn from '../Button/MainBtn';

{
  /* <Route path='/' element={<MainPage />} />
<Route path='/common' element={<Common />} />
<Route path='/estimation' element={'견적페이지 연결해주세요'} />
<Route path='/login' element={'login 페이지 연결해주세요'} />
<Route path='/mypage' element={'mypage 페이지 연결해주세요'} /> */
}

const Header = () => {
  return (
    <nav className='headerNavBar'>
      <Link to='/'>
        <h1>So New Wedding</h1>
      </Link>
      <ul>
        <li>
          <Link to='/estimation'>견적요청</Link>
        </li>

        {/* 아래는 페이지 이동이 어느정도 완성되면 삭제 되어야 합니다 일단 편하라고 추가했어요 */}
        <li>
          <Link to='/common'>공통UI</Link>
        </li>
        <li>
          <Link to='/mypage'>마이페이지</Link>
        </li>
        <li>
          <Link to='/chat'>채팅</Link>
        </li>
      </ul>
      <MainBtn name='로그인' width='auto' height='3.2rem' />{' '}
    </nav>
  );
};

export default Header;
