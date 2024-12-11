import { Link, useNavigate } from 'react-router-dom';
import '@/styles/header.scss';
import '@/global.scss';
import MainBtn from '../Button/MainBtn';
import LargeTitle from '../Title/LargeTitle';
import useUserStateStore from '@/store/useUserStateStore';
import { useEffect, useRef, useState } from 'react';
import { auth } from '@/api/axiosInstance';
import { useToastStore } from '@/store/toastStore';
import Alarm from '../Alarm/Alarm';
import useModeChangerStore from '@/store/modeChangerStore';
import AlarmSocket from '@/utils/alarmSocket';

const socketBaseUrl = import.meta.env.VITE_BACKEND_CHAT_URL;

const Header = () => {
  const { isLoggedIn, isExpert, setIsLoggedIn, setUserName } = useUserStateStore();
  const [menuVisible, setMenuVisible] = useState(false);
  const { addToasts } = useToastStore();
  const navigate = useNavigate();
  const { mode, setMode } = useModeChangerStore();
  const alarmSocket = useRef<AlarmSocket | null>(null);

  // 웹소켓 연결
  useEffect(() => {
    // alarmSocket.current가 null일 때만 초기화
    if (!alarmSocket.current) {
      alarmSocket.current = new AlarmSocket(`${socketBaseUrl}/notifications/`, [
        sessionStorage.getItem('access_token')!,
      ]);
    }

    return () => {
      alarmSocket.current?.close();
      alarmSocket.current = null; // 연결 해제 후 참조를 초기화
    };
  }, []);

  const onClickExpert = () => {
    if (!isExpert && mode === 'user') {
      navigate('/expertProfileEditPage');
      addToasts({
        id: Date.now().toString(),
        title: '📋 So New Wedding 의 전문가가 되어보세요!',
        type: 'success',
      });
    } else if (mode === 'user' && isExpert) {
      if (setMode) {
        setMode('expert');
        navigate('/');
        addToasts({
          id: Date.now().toString(),
          title: '전문가님 어서오세요! ',
          type: 'success',
        });
      }
    }
    //등록 완료 후 setMode('expert'), setIsExpert(true) 처리 필요
  };

  const onClickUser = () => {
    navigate('/');
    if (setMode) {
      setMode('user');
    }
    addToasts({
      id: Date.now().toString(),
      title: '고객님, 환영합니다 🤗',
      type: 'success',
    });
  };

  const onClickLogout = () => {
    const logout = async () => {
      try {
        const response = await auth.post('users/logout/');
        if (setIsLoggedIn && setUserName && setMode) {
          setIsLoggedIn(false);
          setUserName(null);
          setMode('guest');
          sessionStorage.clear();
          navigate('/');
        }
        addToasts({ type: 'success', title: '로그아웃 되셨습니다. 안녕히 가세요!', id: Date.now().toString() });
      } catch {
        // console.error('로그아웃 중에 오류가 발생했습니다', error);
        addToasts({ type: 'error', title: '로그아웃 중 오류가 발생하였습니다.', id: Date.now().toString() });
      }
    };
    logout();
  };

  const onClickCustomerRequest = () => {
    if (mode === 'guest') {
      navigate('/login');
    } else if (mode === 'user') {
      navigate('/userestimation');
    }
  };

  return (
    <header className='headerNavBar'>
      <div className='contents contentLayout'>
        <h6 className='headerTitle'>
          <Link to='/'>
            <LargeTitle title='So New Wedding' fontSize='3.6rem' />
          </Link>
        </h6>
        <nav className='headerWrapper'>
          <div className='headerMenu'>
            <div className='headerNav' role='navigation' aria-label='주요 내비게이션'>
              {mode === 'guest' ? (
                <>
                  <div className='estimationEdit' aria-label='견적 요청또는 로그인 페이지로 이동'>
                    <button onClick={onClickCustomerRequest}>견적요청</button>
                  </div>
                  <div className='loginBtn'>
                    <Link to='/login' aria-label='로그인 페이지로 이동'>
                      <MainBtn name='로그인' width='auto' />
                    </Link>
                  </div>
                </>
              ) : mode === 'user' ? (
                <>
                  <div className='estimationEdit' aria-label='견적 요청또는 로그인 페이지로 이동'>
                    <button onClick={onClickCustomerRequest}>견적요청</button>
                  </div>
                  <div className='headerMenu'>
                    <ul className='userNav' aria-label='고객 내비게이션'>
                      <li>
                        <Alarm />
                      </li>
                      <li>
                        <Link to='/mypage' aria-label='마이 페이지로 이동'>
                          MY
                        </Link>
                      </li>
                      <>
                        <li>
                          <button onClick={onClickExpert} aria-label='전문가 프로필페이지로 이동'>
                            전문가전환
                          </button>
                        </li>
                        <li>
                          <Link to='/estimationlist' aria-label='받은견적 페이지로 이동'>
                            받은 견적
                          </Link>
                        </li>
                      </>
                      <li>
                        <Link to='/chatlistpage' aria-label='채팅 리스트 페이지로 이동'>
                          채팅
                        </Link>
                      </li>
                      <li className='btn'>
                        <MainBtn name='로그아웃' width='auto' onClick={onClickLogout} />
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className='headerMenu'>
                    <ul className='expertNav' aria-label='전문가 내비게이션'>
                      <li>
                        <Alarm />
                      </li>
                      <li>
                        <Link to='/mypage' aria-label='마이 페이지로 이동'>
                          MY
                        </Link>
                      </li>
                      <li>
                        <button onClick={onClickUser} aria-label='고객으로 전환'>
                          고객전환
                        </button>
                      </li>
                      <li>
                        <Link to='/expertlist' aria-label='받은요청 페이지로 이동'>
                          받은 요청
                        </Link>
                      </li>
                      <li>
                        <Link to='/chatlistpage' aria-label='채팅 리스트 페이지로 이동'>
                          채팅
                        </Link>
                      </li>
                      <li className='btn'>
                        <MainBtn name='로그아웃' width='auto' onClick={onClickLogout} />
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
        <div className='headerMiniMenu'>
          {isLoggedIn && <Alarm />}
          <span className='iconMenu'>
            <button type='button' className='menuBtn' onClick={() => setMenuVisible((prev) => !prev)}>
              &#9776;
            </button>
          </span>
          {menuVisible && (
            <div className='sliderMenu'>
              {mode === 'guest' ? (
                <div className='loginMenu'>
                  <div className='estimationEdit' aria-label='로그인 여부에 따라 견적 요청또는 로그인 페이지로 이동'>
                    <button onClick={onClickCustomerRequest}> 견적요청</button>
                  </div>
                  <hr />
                  <div className='loginBtn'>
                    <Link to='/login' aria-label='로그인 페이지로 이동'>
                      로그인
                    </Link>
                  </div>
                </div>
              ) : (
                <div className='userMenu'>
                  <div>
                    <Link to='/mypage' aria-label='마이 페이지로 이동'>
                      마이페이지
                    </Link>
                  </div>

                  {mode === 'user' ? (
                    <>
                      <div className='estimationEdit'>
                        <button onClick={onClickCustomerRequest}>견적요청</button>
                      </div>
                      <hr />
                      <div>
                        <button
                          onClick={onClickExpert}
                          className='expertConversion'
                          aria-label='전문가 프로필페이지로 이동'
                        >
                          전문가 전환
                        </button>
                      </div>
                      <hr />
                      <div>
                        <Link to='/estimationlist' aria-label='받은견적 페이지로 이동'>
                          받은 견적
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <hr />
                      <div>
                        <button onClick={onClickUser} aria-label='고객으로 전환'>
                          고객 전환
                        </button>
                      </div>
                      <hr />
                      <div>
                        <Link to='/expertlist' aria-label='받은요청 페이지로 이동'>
                          받은 요청
                        </Link>
                      </div>
                    </>
                  )}
                  <div>
                    <Link to='/chatlistpage' aria-label='채팅 리스트 페이지로 이동'>
                      채팅
                    </Link>
                  </div>
                  <hr />
                  <Link to='/' aria-label='로그아웃 후 메인 페이지로 이동' onClick={onClickLogout}>
                    로그아웃
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
