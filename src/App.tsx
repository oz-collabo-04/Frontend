import { Route, Routes } from 'react-router-dom';
import '@/global.scss';
import MainPage from './pages/MainPage';
import Common from './Common';
import CommonLayout from './layouts/CommonLayout';
import ChatPage from './pages/ChatPage/ChatPage';
import '@/styles/font.scss';
import Mypage from './pages/MyPage';
import EstimationPage from './pages/Estimationpage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/common' element={<Common />} />
          <Route path='/estimation' element={<EstimationPage />} />
          <Route path='/login' element={'login 페이지 연결해주세요'} />
          <Route path='/mypage' element={<Mypage />} />
        </Route>

        <Route path='/chatpage' element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
