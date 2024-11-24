import { Route, Routes } from 'react-router-dom';
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
import { ConditionsOfUse, PersonalInformation } from './pages/Policy';
import ExpertProfileEditPage from './pages/ExpertProfileEditPage';
import UserEstimationPage from './pages/UserEstimationPage';
import Expertlistpage from './pages/Expertlistpage';
import useLoginProviderStore from './store/useLoginProviderStore';
import CallbackPage from './pages/CallbackPage';
import ReservationPage from './pages/ReservationPage';
import ToastLayout from './layouts/ToastLayout';

function App() {
  const { provider } = useLoginProviderStore();
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
            <Route path='/estimationlist' element={<Estimationlistpage />} />
            <Route path='/expertlist' element={<Expertlistpage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/chatlistpage' element={<ChatListPage />} />
            <Route path='/expertProfileEditPage' element={<ExpertProfileEditPage />} />
          </Route>
          {/* 푸터 제외 레이아웃 */}
          <Route element={<NoFooterLayout />}>
            <Route path='/chatpage' element={<ChatPage />} />
            <Route path='/policy/conditions' element={<ConditionsOfUse />} />
            <Route path='/policy/personal' element={<PersonalInformation />} />
          </Route>
          <Route path={`/login/${provider}/callback`} element={<CallbackPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
