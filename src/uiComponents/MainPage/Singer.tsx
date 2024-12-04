import { ExpertProps } from '@/pages/MainPage';
import TabContentType from './TabContentType';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

interface ExpertData {
  expertData: ExpertProps[] | null;
}
export default function singer({ expertData }: ExpertData) {
  if (!expertData || expertData.length === 0) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div>
        {expertData.map((data) => (
          <TabContentType
            key={data.id}
            src={data.expert_image}
            title={data.service_display}
            name={data.user.name}
            description={data.appeal}
          />
        ))}
      </div>
    </>
  );
}
