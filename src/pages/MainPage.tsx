import Filming from '@/uiComponents/MainPage/Filming';
import Singer from '@/uiComponents/MainPage/Singer';
import Snapshot from '@/uiComponents/MainPage/Snapshot';
import WeddingMC from '@/uiComponents/MainPage/WeddingMC';
import Tab from '@/components/Tab/Tab';
import '@/styles/MainPage/main.scss';
import Billboard from '@/uiComponents/MainPage/Billboard';

export default function MainPage() {
  const tabs = [
    { label: '결혼식 사회자', content: <WeddingMC /> },
    { label: '축가 가수', content: <Singer /> },
    { label: '영상 촬영', content: <Filming /> },
    { label: '스냅 촬영', content: <Snapshot /> },
  ];
  return (
    <>
      <div className='mainPage'>
        <Billboard />
        <main className='contentLayout'>
          <Tab tabs={tabs} />
        </main>
      </div>
    </>
  );
}
