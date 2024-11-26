import Filming from '@/uiComponents/MainPage/Filming';
import Singer from '@/uiComponents/MainPage/Singer';
import Snapshot from '@/uiComponents/MainPage/Snapshot';
import WeddingMC from '@/uiComponents/MainPage/WeddingMC';
import Tab from '@/components/Tab/Tab';
import '@/styles/MainPage/main.scss';
import Billboard from '@/uiComponents/MainPage/Billboard';
import { useEffect, useState } from 'react';
import { client } from '@/api/axiosInstance';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: '결혼식 사회자', content: <WeddingMC /> },
    { label: '축가 가수', content: <Singer /> },
    { label: '영상 촬영', content: <Filming /> },
    { label: '스냅 촬영', content: <Snapshot /> },
  ];

  useEffect(() => {
    const fetchExpertList = async () => {
      const services = ['mc', 'singer', 'video', 'snap'];
      const service = services[activeTab] || 'mc';
      try {
        const response = await client.get('/experts', {
          params: { service },
        });
        console.log('data :', response.data);
      } catch (error) {
        console.log('API 요청에 실패했습니다 :', error);
      }
    };
    fetchExpertList();
  }, [activeTab]);
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
