import { ExpertProps } from '@/pages/MainPage';
import TabContentType from './TabContentType';

interface ExpertData {
  expertData: ExpertProps[] | null;
}
export default function Video({ expertData }: ExpertData) {
  return (
    <>
      <div>
        {expertData?.map((data) => (
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