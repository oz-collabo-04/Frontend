import { ExpertProps } from '@/pages/MainPage';
import TabContentType from './TabContentType';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import '@/styles/MainPage/main.scss';
import { useNavigate } from 'react-router-dom';
import useModeChangerStore from '@/store/modeChangerStore';
import { useToastStore } from '@/store/toastStore';

interface ExpertData {
  expertData: ExpertProps[] | null;
}
export default function WeddingMC({ expertData }: ExpertData) {
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
        title: '이용하시려면 유저로 전환해주세요!',
        type: 'error',
      });
    }
  };
  return (
    <>
      {
        <div onClick={OnClicknavigate}>
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
