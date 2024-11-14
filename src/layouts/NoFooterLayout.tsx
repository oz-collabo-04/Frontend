import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function NoFooterLayout() {
  return (
    <div>
      <Header />
      <main className='mainContent'>
        <Outlet />
      </main>
    </div>
  );
}
