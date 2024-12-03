import { Route, Routes, useNavigate } from 'react-router-dom';
import '@/global.scss';
import MainPage from './pages/MainPage';
import Common from './Common';
import CommonLayout from './layouts/CommonLayout';
import ChatPage from './pages/ChatPage';
import '@/styles/font.scss';
import Mypage from './pages/MyPage';
import Estimationlistpage from './pages/Estimationlistpage';
import NoFooterLayout from './layouts/NoFooterLayout';
import ChatListPage from './pages/ChatListPage';
import LoginPage from './pages/LoginPage';
import ExpertProfileEditPage from './pages/ExpertProfileEditPage';
import UserEstimationPage from './pages/UserEstimationPage';
import Expertlistpage from './pages/Expertlistpage';
import useLoginProviderStore from './store/useLoginProviderStore';
import CallbackPage from './pages/CallbackPage';
import ReservationPage from './pages/ReservationPage';
import ToastLayout from './layouts/ToastLayout';

import { useToastStore } from './store/toastStore';
import { setRedirectFunction } from './api/axiosInstance';

import useUserStateStore from './store/useUserStateStore';
import CalenderPage from './pages/CalenderPage';


function App() {
  const { provider } = useLoginProviderStore();
  const { setIsLoggedIn } = useUserStateStore();
  const navigate = useNavigate();
  const { addToasts } = useToastStore();

  setRedirectFunction(() => {
    navigate('/login');
    if (setIsLoggedIn) {
      setIsLoggedIn(false);
    }
    addToasts({
      id: Date.now().toString(),
      title: '로그인이 만료되었습니다. 다시 로그인 해주세요',
      type: 'error',
    });
  });
  return (
    <>
      <Routes>
        {/* 토스트 메시지 레이아웃 */}
        <Route element={<ToastLayout />}>
          {/* 푸터 포함 레이아웃 */}
          <Route element={<CommonLayout />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/common' element={<Common />} />
            <Route path='/userestimation' element={<UserEstimationPage />} />
            <Route path='/reservation' element={<ReservationPage />} />
            <Route path='/calenderPage' element={<CalenderPage />} />
            <Route path='/estimationlist' element={<Estimationlistpage />} />
            <Route path='/expertlist' element={<Expertlistpage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/chatlistpage' element={<ChatListPage />} />
            <Route path='/expertProfileEditPage' element={<ExpertProfileEditPage />} />
          </Route>
          {/* 푸터 제외 레이아웃 */}
          <Route element={<NoFooterLayout />}>
            <Route path='/chatpage/:roomId' element={<ChatPage />} />
          </Route>
          <Route path={`/login/${provider}/callback`} element={<CallbackPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
