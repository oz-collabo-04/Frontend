import { Link, useNavigate } from 'react-router-dom';
import '@/styles/header.scss';
import '@/global.scss';
import MainBtn from '../Button/MainBtn';
import LargeTitle from '../Title/LargeTitle';
import useUserStateStore from '@/store/useUserStateStore';
import { useState } from 'react';
import { auth } from '@/api/axiosInstance';
import { useToastStore } from '@/store/toastStore';
import Alarm from '../Alarm/Alarm';
import axios from 'axios';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setUserName, setIsExpert } = useUserStateStore();
  const [menuVisible, setMenuVisible] = useState(false);
  const { addToasts } = useToastStore();
  const [showAlarm, setShowAlarm] = useState(false);
  const navigate = useNavigate();

  const [alarmList, setAlarmList] = useState([
    { id: 0, alarmContent: '알람 1번' },
    { id: 1, alarmContent: '알람 2번' },
    { id: 2, alarmContent: '알람 3번' },
  ]);

  const handleAlarm = () => {
    setShowAlarm(!showAlarm);
  };

  console.log(menuVisible);

  const onClickExpert = () => {
    const expertDetailData = async () => {
      try {
        const response = await auth.get('experts/detail/');
        if (response.status === 200) {
          navigate('/');
          addToasts({
            id: Date.now().toString(),
            title: '전문가님, 안녕하세요!',
            type: 'success',
          });
          if (setIsExpert) {
            setIsExpert(true);
          }
        }
        console.log(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('fetchError', error.response);
          navigate('/expertProfileEditPage');
          addToasts({
            id: Date.now().toString(),
            title: '📋 So New Wedding 의 전문가가 되어보세요!',
            type: 'success',
          });
        }
      }
    };
    expertDetailData();
  };

  const OnClick = () => {
    const logout = async () => {
      try {
        const response = await auth.post('users/logout/');
        console.log('로그아웃에 성공했습니다.', response.data);
        localStorage.clear();
        if (setIsLoggedIn && setUserName) {
          setIsLoggedIn(false);
          setUserName(null);
        }
        addToasts({ type: 'success', title: '로그아웃 되셨습니다. 안녕히 가세요!', id: Date.now().toString() });
      } catch (error) {
        // localStorage.clear();
        // if (setIsLoggedIn && setUserName) {
        //   setIsLoggedIn(false);
        //   setUserName(null);
        // }
        console.error('로그아웃 중에 오류가 발생했습니다', error);
        addToasts({ type: 'error', title: '로그아웃 중 오류가 발생하였습니다.', id: Date.now().toString() });
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
              {!isLoggedIn ? (
                <div className='loginBtn'>
                  <Link to='/login' aria-label='로그인 페이지로 이동'>
                    <MainBtn name='로그인' width='auto' />
                  </Link>
                </div>
              ) : (
                <div className='headerMenu'>
                  <ul className='userNav' role='navigation' aria-label='주요 내비게이션'>
                    <li>
                      <Alarm />
                    </li>
                    <li>
                      <Link to='/mypage' aria-label='마이 페이지로 이동'>
                        마이
                      </Link>
                    </li>
                    <li onClick={onClickExpert} aria-label='전문가 프로필페이지로 이동' style={{ cursor: 'pointer' }}>
                      전문가
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
          {isLoggedIn && <Alarm />}
          <span className='iconMenu'>
            <button type='button' className='menuBtn' onClick={() => setMenuVisible((prev) => !prev)}>
              &#9776;
            </button>
          </span>
          {menuVisible && (
            <div className='sliderMenu'>
              {!isLoggedIn ? (
                <div className='loginMenu'>
                  <div className='estimationEdit'>
                    <Link to='/userestimation' aria-label='견적요청 페이지로 이동'>
                      견적요청
                    </Link>
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
                  <div
                    onClick={onClickExpert}
                    className='expertConversion'
                    aria-label='전문가 프로필페이지로 이동'
                    style={{ cursor: 'pointer' }}
                  >
                    전문가 전환
                  </div>
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
