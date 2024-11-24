import { Toast } from '@/config/types';
import { useToastStore } from '@/store/toastStore';
import '@/styles/toastMessage.scss';
import { useEffect, useState } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { VscError } from 'react-icons/vsc';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export default function ToastMessage({ id, title, type }: Toast) {
  const [opacity, setOpacity] = useState('opacity-30');
  const { removeToasts } = useToastStore();

  useEffect(() => {
    setOpacity('opacity-80');
    const timeoutForRemove = setTimeout(() => {
      removeToasts(id);
    }, 2000);

    return () => {
      clearTimeout(timeoutForRemove);
    };
  }, [id, removeToasts]);

  return (
    <div className={`${type === 'success' ? 'success' : type === 'error' ? 'error' : ''} ${opacity} + toastModal`}>
      <span>
        {type === 'success' ? (
          <FaRegCircleCheck size='2rem' />
        ) : type === 'error' ? (
          <VscError size='2rem' />
        ) : (
          <AiOutlineInfoCircle />
        )}
      </span>
      <div>{title}</div>
    </div>
  );
}
