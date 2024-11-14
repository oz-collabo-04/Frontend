import { Route, Routes } from 'react-router-dom';
import '@/global.scss';
import MainPage from './pages/MainPage';
import Common from './Common';
import CommonLayout from './layouts/CommonLayout';
import ChatPage from './pages/ChatPage/ChatPage';
import '@/styles/font.scss';
import Mypage from './pages/MyPage';
import NoFooterLayout from './layouts/NoFooterLayout';

function App() {
  return (
    <>
      <Routes>
        {/* 푸터 포함 레이아웃 */}
        <Route element={<CommonLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/common' element={<Common />} />
          <Route path='/estimation' element={'견적페이지 연결해주세요'} />
          <Route path='/login' element={'login 페이지 연결해주세요'} />
          <Route path='/mypage' element={<Mypage />} />
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
