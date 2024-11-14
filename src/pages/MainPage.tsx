import Filming from '@/components/MainPage/Filming';
import Singer from '@/components/MainPage/Singer';
import Snapshot from '@/components/MainPage/Snapshot';
import WeddingMC from '@/components/MainPage/WeddingMC';
import Tab from '@/components/Tab/Tab';
import XLargeTitle from '@/components/Title/XLargeTitle';
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
      <div className='mainContainer'>
        <XSmallTitle title='영화같은 웨딩을 위한 서비스' fontSize='2.3rem' fontWeight='450' extraClass='billboard' />
        <main className='contentLayout'>
          <XLargeTitle extraClass='serviceInfo' title='서비스 소개' />
          <div className='serviceTab'>
            <Tab tabs={tabs} />
          </div>
        </main>
      </div>
    </>
  );
}
