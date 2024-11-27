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
  const [showAlarm, setShowAlarm] = useState(false);

  const [alarmList, setAlarmList] = useState([
    { id: 0, alarmContent: '알람 1번' },
    { id: 1, alarmContent: '알람 2번' },
    { id: 2, alarmContent: '알람 3번' },
  ]);

  const handleAlarm = () => {
    setShowAlarm(!showAlarm);
  };

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
        <nav className='headerWrapper'>
          <div className='headerMenu'>
            <div className='headerNav' role='navigation' aria-label='주요 내비게이션'>
              <div className='estimationEdit'>
                <Link to='/userestimation' aria-label='견적요청 페이지로 이동'>
                  견적요청
                </Link>
              </div>
              {!userLogin ? (
                <div className='loginBtn'>
                  <Link to='/login' aria-label='로그인 페이지로 이동'>
                    <MainBtn name='로그인' width='auto' />
                  </Link>
                </div>
              ) : (
                <div className='headerMenu'>
                  <ul className='userNav' role='navigation' aria-label='주요 내비게이션'>
                    <li>
                      <div className='alarmBox'>
                        <button className='alarmBtn' onClick={handleAlarm}>
                          알람
                          <span className='on'></span>
                        </button>
                        {showAlarm && (
                          <div className='alarmListBox'>
                            {alarmList.length > 0 ? (
                              <ul className='alarmList'>
                                {alarmList.map((alarm) => (
                                  <li className='alarm' key={alarm.id}>
                                    <button>{alarm.alarmContent}</button>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className='noAlarm'>알람이 없습니다.</div>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                    <li>
                      <Link to='/mypage' aria-label='마이 페이지로 이동'>
                        마이
                      </Link>
                    </li>
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
                    <li className='btn'>
                      <Link to='/' aria-label='메인 페이지로 이동'>
                        <MainBtn name='로그아웃' width='auto' onClick={OnClick} />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className='headerMiniMenu'>
          <div className='alarmBox'>
            <button className='alarmBtn' onClick={handleAlarm}>
              알람
              <span className='on'></span>
            </button>
            {showAlarm && (
              <div className='alarmListBox'>
                {alarmList.length > 0 ? (
                  <ul className='alarmList'>
                    {alarmList.map((alarm) => (
                      <li className='alarm' key={alarm.id}>
                        <button>{alarm.alarmContent}</button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className='noAlarm'>알람이 없습니다.</div>
                )}
              </div>
            )}
          </div>
          <span className='iconMenu'>
            <button type='button' className='menuBtn' onClick={() => setMenuVisible((prev) => !prev)}>
              &#9776;
            </button>
          </span>
          {menuVisible && (
            <div className='sliderMenu'>
              {!userLogin ? (
                <div className='loginMenu'>
                  <div className='estimationEdit'>
                    <Link to='/userestimation' aria-label='견적요청 페이지로 이동'>
                      견적요청
                    </Link>
                  </div>
                  <hr />
                  <div className='loginBtn'>
                    <Link to='/login' aria-label='로그인 페이지로 이동'>
                      <MainBtn name='로그인' width='auto' />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className='userMenu'>
                  <div>프로필</div>
                  <div>
                    <Link to='/mypage' aria-label='마이 페이지로 이동'>
                      마이페이지
                    </Link>
                  </div>
                  <div className='estimationEdit'>
                    <Link to='/userestimation' aria-label='견적요청 페이지로 이동'>
                      견적요청
                    </Link>
                  </div>
                  <hr />
                  <div>전문가 전환</div>
                  <hr />
                  <div>
                    <Link to='/estimationlist' aria-label='받은견적 페이지로 이동'>
                      받은견적
                    </Link>
                  </div>
                  <div>
                    <Link to='/chatlistpage' aria-label='채팅 리스트 페이지로 이동'>
                      채팅
                    </Link>
                  </div>
                  <hr />
                  <Link to='/' aria-label='메인 페이지로 이동' onClick={OnClick}>
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
