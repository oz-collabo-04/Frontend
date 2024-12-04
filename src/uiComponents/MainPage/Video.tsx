import { ExpertProps } from '@/pages/MainPage';
import TabContentType from './TabContentType';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

interface ExpertData {
  expertData: ExpertProps[] | null;
}
export default function Video({ expertData }: ExpertData) {
  return (
    <>
      <div>
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
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}
