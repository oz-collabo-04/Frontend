import { Link } from 'react-router-dom';
import '@/styles/header.scss';
import MainBtn from '../Button/MainBtn';
import LargeTitle from '../Title/LargeTitle';

{
  /* <Route path='/' element={<MainPage />} />
<Route path='/common' element={<Common />} />
<Route path='/estimation' element={'견적페이지 연결해주세요'} />
<Route path='/login' element={'login 페이지 연결해주세요'} />
<Route path='/mypage' element={'mypage 페이지 연결해주세요'} /> */
}

const Header = () => {
  return (
    <div className='headerNavBar'>
      <div className='headerContents'>
        <Link to='/'>
          <LargeTitle title='So New Wedding' fontSize='3.6rem' extraClass='headerTitle'></LargeTitle>
        </Link>
        <ul className='left'>
          <li>
            <Link to='/userestimation'>견적요청</Link>
          </li>
          {/* 아래는 페이지 이동이 어느정도 완성되면 삭제 되어야 합니다 일단 편하라고 추가했어요 */}
          <li>
            <Link to='/common'>공통UI</Link>
          </li>
          <li>
            <Link to='/mypage'>마이페이지</Link>
          </li>
        </ul>
        <ul className='right'>
          <li>
            <Link to='/estimationlist'>받은견적</Link>
          </li>
          <li>
            <Link to='/chatpage'>채팅</Link>
          </li>
        </ul>
      </div>
      <Link to='/login'>
        <MainBtn name='로그인' width='auto' height='3.2rem' />
      </Link>
    </div>
  );
};

export default Header;
