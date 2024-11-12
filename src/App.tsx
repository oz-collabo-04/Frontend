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
        </Route>
        <Route path='/common' element={<Common />} />
      </Routes>
    </>
  );
}

export default App;


