import Filming from '@/uiComponents/MainPage/Filming';
import Singer from '@/uiComponents/MainPage/Singer';
import Snapshot from '@/uiComponents/MainPage/Snapshot';
import WeddingMC from '@/uiComponents/MainPage/WeddingMC';
import Tab from '@/components/Tab/Tab';
import XSmallTitle from '@/components/Title/XSmallTitle';
import '@/styles/MainPage/main.scss';

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
        <XSmallTitle title='영화같은 웨딩을 위한 서비스' fontSize='2.3rem' fontWeight='450' extraClass='billboard' />
        <main className='contentLayout'>
          <div className='tabWrapper'>
            <Tab tabs={tabs} />
          </div>
        </main>
      </div>
    </>
  );
}
