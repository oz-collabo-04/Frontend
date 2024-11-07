import Footer from '@/components/Common/Footer';
import Header from '@/components/Common/Header';
import { Outlet } from 'react-router-dom';

export default function CommonLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
