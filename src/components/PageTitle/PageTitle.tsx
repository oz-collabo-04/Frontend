import { useNavigate } from 'react-router-dom';

interface PageTitleProps {
  title: string;
  isPrevBtn?: boolean;
  prevUrl?: string;
}

const PageTitle = ({ title, isPrevBtn = true, prevUrl }: PageTitleProps) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
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
