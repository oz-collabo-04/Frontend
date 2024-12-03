import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Header2 from '@/components/Header/Header2';
import { Outlet } from 'react-router-dom';

export default function CommonLayout() {
  return (
    <div>
      <Header2 />
      <main className='mainContent'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
