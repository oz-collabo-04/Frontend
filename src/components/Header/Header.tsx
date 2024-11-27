import { Link } from 'react-router-dom';
import '@/styles/header.scss';
import '@/global.scss';
import MainBtn from '../Button/MainBtn';
import LargeTitle from '../Title/LargeTitle';
import useUserStateStore from '@/store/useUserStateStore';
import { useState } from 'react';
import { auth } from '@/api/axiosInstance';
import { useToastStore } from '@/store/toastStore';

const Header = () => {
  const { setIsLoggedIn, setName } = useUserStateStore();
  const userLogin = useUserStateStore((state) => state.isLoggedIn);
  const [menuVisible, setMenuVisible] = useState(false);
  const { addToasts } = useToastStore();

  console.log(menuVisible);

  const OnClick = () => {
    const logout = async () => {
      try {
        const response = await auth.post('users/logout/');
        console.log('로그아웃에 성공했습니다. 메인페이지로 이동합니다...', response.data);
        localStorage.clear();
        addToasts({ type: 'success', title: '로그아웃 되셨습니다. 안녕히 가세요!', id: Date.now().toString() });
      } catch (error) {
        console.error('로그아웃 중에 오류가 발생했습니다', error);
        localStorage.clear(); // 이 부분 쿠키 해결되면 지워야 함!!
        if (setIsLoggedIn && setName) {
          setIsLoggedIn(false);
          setName(null);
        }
        addToasts({ type: 'success', title: '로그아웃 되셨습니다. 안녕히 가세요!', id: Date.now().toString() });
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
                    <Link to='/chatlistpage' aria-label='채팅 리스트 페이지로 이동'>
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
          <span className='iconMenu'>
            <button type='button' className='menuBtn' onClick={() => setMenuVisible((prev) => !prev)}>
              &#9776;
            </button>
          </span>
          {menuVisible && (
            <div className='sliderMenu'>
              {!userLogin ? (
                <>
                  <div>견적요청</div>
                  <div>공통UI</div>
                  <div>-</div>
                  <div>로그인</div>
                </>
              ) : (
                <>
                  <div>프로필</div>
                  <div>마이페이지</div>
                  <div>견적요청</div>
                  <hr />
                  <div>전문가 전환</div>
                  <hr />
                  <div>받은 견적</div>
                  <div>채팅</div>
                  <hr />
                  <div>로그아웃</div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
