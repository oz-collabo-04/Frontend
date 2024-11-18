import { Route, Routes } from 'react-router-dom';
import '@/global.scss';
import MainPage from './pages/MainPage';
import Common from './Common';
import CommonLayout from './layouts/CommonLayout';
import ChatPage from './pages/ChatPage';
import '@/styles/font.scss';
import Mypage from './pages/MyPage';
import EstimationPage from './pages/Estimationpage';
import NoFooterLayout from './layouts/NoFooterLayout';
import ExpertProfile from './pages/ExpertProfile';
import ChatListPage from './pages/ChatListPage';
import LoginPage from './pages/LoginPage';
import { ConditionsOfUse, PersonalInformation } from './pages/Policy';
import ExpertProfileEditPage from './pages/ExpertProfileEditPage';

function App() {
  return (
    <>
      <Routes>
        {/* 푸터 포함 레이아웃 */}
        <Route element={<CommonLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/common' element={<Common />} />
          <Route path='/estimation' element={<EstimationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/chatlistpage' element={<ChatListPage />} />
          <Route path='/expertProfileEditPage' element={<ExpertProfileEditPage />} />
        </Route>

        {/* 푸터 제외 레이아웃 */}
        <Route element={<NoFooterLayout />}>
          <Route path='/chatpage' element={<ChatPage />} />
          <Route path="/expertprofile/:id" element={<ExpertProfile />} />
          <Route path='/policy/conditions' element={<ConditionsOfUse />} />
          <Route path='/policy/personal' element={<PersonalInformation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
