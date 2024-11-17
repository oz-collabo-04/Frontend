import { useModalStore } from '@/store/modalStore';
import IconBtn from '../IconButton/IconBtn';

interface ModalProps {
  modalId: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  title: string;
  content: React.ReactNode;
}

const Modal = ({ modalId, width = '48rem', height = '50vh', borderRadius = '2rem', title, content }: ModalProps) => {
  const { modals, closeModal } = useModalStore();
  const isOpen = modals[modalId];

  if (!isOpen) return null;

  return (
    <>
      <div className='comModal'>
        <div className='modalWrapper' style={{ width, height, borderRadius }}>
          <div className='modalHeader'>
            <h2 className='title'>{title}</h2>
            <IconBtn
              backgroundColor='transparent'
              src='/image/modal_close_icon.svg'
              alt='모달창 닫기'
              onClick={() => closeModal(modalId)}
            />
          </div>
          <div className='modalContents'>{content}</div>
        </div>
        <div className='blackBg' onClick={() => closeModal(modalId)}></div>
      </div>
    </>
  );
};

export default Modal;
