import { ExpertProps } from '@/pages/MainPage';
import TabContentType from './TabContentType';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import useModeChangerStore from '@/store/modeChangerStore';
import { useToastStore } from '@/store/toastStore';

interface ExpertData {
  expertData: ExpertProps[] | null;
}
export default function Singer({ expertData }: ExpertData) {
  const navigate = useNavigate();
  const { mode } = useModeChangerStore();
  const { addToasts } = useToastStore();
  const OnClicknavigate = () => {
    if (mode === 'guest') {
      navigate('/login');
    } else if (mode === 'user') {
      navigate('/userestimation');
    } else {
      return addToasts({
        id: Date.now().toString(),
        title: '이용하시려면 고객전환이 필요합니다.',
        type: 'error',
      });
    }
  };
  return (
    <>
      {
        <div className='expertList' onClick={OnClicknavigate}>
          {expertData ? (
            expertData.map((data) => (
              <TabContentType
                key={data.id}
                src={data.expert_image}
                title={data.service_display}
                name={data.user.name}
                description={data.appeal}
              />
            ))
          ) : (
            <div className='loadingSpinnerBox'>
              <LoadingSpinner />
            </div>
          )}
        </div>
      }
    </>
  );
}
