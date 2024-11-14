import { Route, Routes } from 'react-router-dom';
import '@/global.scss';
import MainPage from './pages/MainPage';
import Common from './Common';
import CommonLayout from './layouts/CommonLayout';

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
        <Route path='/chat' element={'채팅페이지 연결해주세요'} />
      </Routes>
    </>
  );
}

export default App;
