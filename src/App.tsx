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
import ChatListPage from './pages/ChatListPage';
import LoginPage from './pages/LoginPage';

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
        </Route>

        {/* 푸터 제외 레이아웃 */}
        <Route element={<NoFooterLayout />}>
          <Route path='/chatpage' element={<ChatPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
