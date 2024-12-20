import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function CommonLayout() {
  return (
    <div>
      <Header />
      <main className='mainContent'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
