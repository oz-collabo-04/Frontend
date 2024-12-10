import { useModalStore } from '@/store/modalStore';
import IconBtn from '../IconButton/IconBtn';

interface ModalProps {
  modalId: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  title: string;
  content: React.ReactNode;
  firstBtn?: boolean;
  firstBtnName?: string;
  firstBtnOnClick?: () => void;
  secondBtn?: boolean;
  secondBtnName?: string;
  secondBtnOnClick?: () => void;
  extraClass?: string;
}

const Modal = ({
  modalId,
  width = '48rem',
  height = '50vh',
  borderRadius = '2rem',
  title,
  content,
  firstBtn = false,
  firstBtnName = '버튼1',
  firstBtnOnClick,
  secondBtn = false,
  secondBtnName = '버튼2',
  secondBtnOnClick,
  extraClass = '',
}: ModalProps) => {
  const { modals, closeModal } = useModalStore();
  const isOpen = modals[modalId];

  if (!isOpen) return null;

  return (
    <>
      <div className={`comModal ${extraClass}`}>
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
          <div className='modalFooter'>
            {firstBtn && (
              <button type='button' onClick={firstBtnOnClick}>
                {firstBtnName}
              </button>
            )}
            {secondBtn && (
              <button type='button' onClick={secondBtnOnClick}>
                {secondBtnName}
              </button>
            )}
          </div>
        </div>
        <div className='blackBg' onClick={() => closeModal(modalId)}></div>
      </div>
    </>
  );
};

export default Modal;
