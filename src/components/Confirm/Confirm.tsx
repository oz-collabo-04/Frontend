import { useConfirmStore } from '@/store/confirmStore';

interface ConfirmProps {
  confirmId: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  title: string;
  content: React.ReactNode;
  trueBtn?: boolean;
  trueBtnName?: string;
  trueBtnOnClick?: () => void;
  falseBtn?: boolean;
  falseBtnName?: string;
  falseBtnOnClick?: () => void;
}

const Confirm = ({
  confirmId,
  width = '48rem',
  height = '50vh',
  borderRadius = '2rem',
  title,
  content,
  trueBtn = false,
  trueBtnName = '확인',
  trueBtnOnClick,
  falseBtn = false,
  falseBtnName = '취소',
  falseBtnOnClick,
}: ConfirmProps) => {
  const { confirms } = useConfirmStore();
  const isOpen = confirms[confirmId];

  if (!isOpen) return null;

  return (
    <>
      <div className='comConfirm'>
        <div className='confirmWrapper' style={{ width, height, borderRadius }}>
          <div className='confirmHeader'>
            <h2 className='title'>{title}</h2>
          </div>
          <div className='comfirmContents'>{content}</div>
          <div className='comfirmFooter'>
            {trueBtn && (
              <button className='trueBtn' type='button' onClick={trueBtnOnClick}>
                {trueBtnName}
              </button>
            )}
            {falseBtn && (
              <button className='falseBtn' type='button' onClick={falseBtnOnClick}>
                {falseBtnName}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
