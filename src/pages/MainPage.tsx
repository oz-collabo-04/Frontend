import Singer from '@/uiComponents/MainPage/Singer';
import Snapshot from '@/uiComponents/MainPage/Snapshot';
import WeddingMC from '@/uiComponents/MainPage/WeddingMC';
import Tab from '@/components/Tab/Tab';
import '@/styles/MainPage/main.scss';
import Billboard from '@/uiComponents/MainPage/Billboard';
import { useEffect, useState } from 'react';
import { client } from '@/api/axiosInstance';
import Video from '@/uiComponents/MainPage/Video';
import useLoginToastStateStore from '@/store/loginToastStateStore';
import { useToastStore } from '@/store/toastStore';
import useUserStateStore from '@/store/useUserStateStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

export interface ExpertProps {
  service_display: string;
  id: number;
  expert_image: string;
  service: string;
  standard_charge: number;
  appeal: string;
  available_location: string[];
  careers: {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string | null;
  }[];
  user: {
    id: number;
    name: string;
    gender: 'M' | 'F';
  };
}

export default function MainPage() {
  const [, setActiveTab] = useState<number>(0);
  const [expertData] = useState<ExpertProps[] | null>(null);
  const { setIsLoginToastShown, isLoginToastShown } = useLoginToastStateStore();
  const { userName } = useUserStateStore();
  const { addToasts } = useToastStore();

  if (isLoginToastShown) {
    addToasts({
      id: Date.now.toString(),
      title: `${userName}님, 어서오세요! 👋🏻`,
      type: 'success',
    });
    setIsLoginToastShown(false);
  }
  // useEffect(() => {
  //   const fetchExpertList = async () => {
  //     const services = ['mc', 'singer', 'video', 'snap'];
  //     const service = services[activeTab] || 'mc';
  //     try {
  //       const response = await client.get('/experts/', {
  //         params: {
  //           random: true,
  //           service: service,
  //         },
  //       });
  //       console.log('data :', response.data);
  //       setExpertData(response.data);
  //     } catch (error) {
  //       console.log('API 요청에 실패했습니다 :', error);
  //     }
  //   };
  //   fetchExpertList();
  // }, [activeTab]);

  if (expertData) {
    const tabs = [
      { label: '결혼식 사회자', content: <WeddingMC expertData={expertData} /> },
      { label: '축가 가수', content: <Singer expertData={expertData} /> },
      { label: '영상 촬영', content: <Video expertData={expertData} /> },
      { label: '스냅 촬영', content: <Snapshot expertData={expertData} /> },
    ];
    return (
      <>
        <div className='mainPage'>
          <Billboard />
          <main className='contentLayout'>
            <Tab
              tabs={tabs}
              onTabChange={(index) => {
                setActiveTab(index);
              }}
            />
          </main>
        </div>
      </>
    );
  }
  return (
    <>
      <LoadingSpinner />
    </>
  );
}
