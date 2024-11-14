import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
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
