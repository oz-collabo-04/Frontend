import { Link } from 'react-router-dom';
import '@/styles/header.scss';
import '@/global.scss';
import MainBtn from '../Button/MainBtn';
import LargeTitle from '../Title/LargeTitle';

const Header = () => {
  return (
    <header className='headerNavBar'>
      <div className='contentLayout'>
        <div className='contents'>
          <Link to='/'>
            <LargeTitle title='So New Wedding' fontSize='3.6rem' extraClass='title'></LargeTitle>
          </Link>
          <div className='link'>
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
          <div className='btn'>
            <Link to='/login'>
              <MainBtn name='로그인' width='auto' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
