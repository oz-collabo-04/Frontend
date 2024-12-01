import { useNavigate } from 'react-router-dom';

interface PageTitleProps {
  title: string;
  isPrevBtn?: boolean;
  prevUrl?: string;
  onAddClickFunction?: () => void;
}

const PageTitle = ({ title, isPrevBtn = true, prevUrl, onAddClickFunction }: PageTitleProps) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (onAddClickFunction) {
      onAddClickFunction(); // 버튼 클릭했을 때 추가적인 기능을 위해
    }

    if (prevUrl) {
      navigate(prevUrl);
    }
  };

  return (
    <div className='pageTitle'>
      {isPrevBtn && (
        <button className='prevBtn' onClick={handlePrevClick}>
          이전 페이지로 이동
        </button>
      )}
      <p className='title'>{title}</p>
    </div>
  );
};

export default PageTitle;
