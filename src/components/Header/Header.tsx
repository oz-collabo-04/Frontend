import { Link } from 'react-router-dom';
import '@/styles/header.scss';
import '@/global.scss';
import MainBtn from '../Button/MainBtn';
import LargeTitle from '../Title/LargeTitle';
import useUserStateStore from '@/store/useUserStateStore';
import { auth } from '@/api/axiosInstance';

const Header = () => {
  const { setIsLoggedIn, setName } = useUserStateStore();
  const userLogin = useUserStateStore((state) => state.isLoggedIn);
  console.log(userLogin);

  const OnClick = () => {
    const logout = async () => {
      try {
        const response = await auth.post('users/logout/');
        console.log('로그아웃에 성공했습니다. 메인페이지로 이동합니다...', response.data);
        if (setIsLoggedIn && setName) {
          setIsLoggedIn(false);
          setName(null);
        }
        localStorage.clear();
      } catch (error) {
        console.error('로그아웃 중에 오류가 발생했습니다', error);
      }
    };
    logout();
  };

  return (
    <header className='headerNavBar'>
      <div className='contents contentLayout'>
        <h6 className='headerTitle'>
          <Link to='/'>
            <LargeTitle title='So New Wedding' fontSize='3.6rem' />
          </Link>
        </h6>
        <div className='headerWrapper'>
          <div className='headerLeft'>
            <nav>
              <ul className='headerMenu' role='navigation' aria-label='주요 내비게이션'>
                <li>
                  <Link to='/userestimation' aria-label='견적요청 페이지로 이동'>
                    견적요청
                  </Link>
                </li>
                {/* 아래는 페이지 이동이 어느정도 완성되면 삭제 되어야 합니다 일단 편하라고 추가했어요 */}
                <li>
                  <Link to='/common'>공통UI</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='headerRight'>
            {!userLogin ? (
              <div className='btn'>
                <Link to='/login' aria-label='로그인 페이지로 이동'>
                  <MainBtn name='로그인' width='auto' />
                </Link>
              </div>
            ) : (
              <nav>
                <ul className='headerMenu' role='navigation' aria-label='주요 내비게이션'>
                  <li>
                    <Link to='/estimationlist' aria-label='받은견적 페이지로 이동'>
                      받은견적
                    </Link>
                  </li>
                  <li>
                    <Link to='/chatpage' aria-label='채팅 리스트 페이지로 이동'>
                      채팅
                    </Link>
                  </li>
                  <li>
                    <Link to='/mypage' aria-label='마이 페이지로 이동'>
                      마이페이지
                    </Link>
                  </li>
                  <li className='btn'>
                    <Link to='/' aria-label='메인 페이지로 이동'>
                      <MainBtn name='로그아웃' width='auto' onClick={OnClick} />
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
        <div className='headerMiniMenu'>
          <input type='checkbox' id='menuToggle' className='menuToggle' />
          <label htmlFor='menuToggle' className='iconMenu' aria-label='메뉴 열기'>
            &#9776;
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
