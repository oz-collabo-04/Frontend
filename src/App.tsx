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
import NaverCallbackPage from './pages/NaverCallbackPage';
import GoogleCallbackPage from './pages/GoogleCallbackPage';
import KakaoCallbackPage from './pages/KakaocallbackPage';
import Expertlistpage from './pages/Expertlistpage';
import Reservation from './pages/Reservation';

function App() {
  return (
    <>
      <Routes>
        {/* 푸터 포함 레이아웃 */}
        <Route element={<CommonLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/common' element={<Common />} />
          <Route path='/userestimation' element={<UserEstimationPage />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/estimationlist' element={<Estimationlistpage />} />
          <Route path='/expertlist' element={<Expertlistpage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/chatlistpage' element={<ChatListPage />} />
          <Route path='/expertProfileEditPage' element={<ExpertProfileEditPage />} />å
        </Route>
        {/* 푸터 제외 레이아웃 */}
        <Route element={<NoFooterLayout />}>
          <Route path='/chatpage' element={<ChatPage />} />
          <Route path='/policy/conditions' element={<ConditionsOfUse />} />
          <Route path='/policy/personal' element={<PersonalInformation />} />
        </Route>
        <Route path='/login/naver/callback' element={<NaverCallbackPage />} />
        <Route path='/login/google/callback' element={<GoogleCallbackPage />} />
        <Route path='/login/kakao/callback' element={<KakaoCallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
