import { Route, Routes } from 'react-router-dom';
import '@/global.scss';
import MainPage from './pages/MainPage';
import Common from './Common';
import CommonLayout from './layouts/CommonLayout';
import ChatPage from './pages/ChatPage/ChatPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/common' element={<Common />} />
          <Route path='/estimation' element={'견적페이지 연결해주세요'} />
          <Route path='/login' element={'login 페이지 연결해주세요'} />
          <Route path='/mypage' element={'mypage 페이지 연결해주세요'} />
        </Route>

        <Route path='/chatpage' element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
