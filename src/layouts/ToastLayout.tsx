import { Toast } from '@/config/types';
import { useToastStore } from '@/store/toastStore';
import ToastMessage from '@/utils/ToastMessage';
import { Outlet } from 'react-router-dom';
import '@/global.scss';

export default function ToastLayout() {
  const { toasts } = useToastStore();

  return (
    <>
      <div className='toastLayout'>
        {toasts.map((toast: Toast) => (
          <ToastMessage key={toast.id} {...toast} />
        ))}
      </div>
      <Outlet />
    </>
  );
}
