import { useState, ReactNode } from 'react';

// TabProps 타입 정의
interface TabProps {
  tabs: {
    label: string; // 탭 이름 (버튼 텍스트)
    content: ReactNode; // 탭에 표시될 내용 (컴포넌트)
  }[];
  extraClass?: string;
  onTabChange?: (index: number) => void;
}

const Tab = ({ tabs, extraClass, onTabChange = () => {} }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className={`comTab ${extraClass}`}>
      {/* 탭 버튼 */}
      <div className='tabBtnBox'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            type='button'
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.label} {/* 탭 이름을 동적으로 출력 */}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <div className='tabConBox'>
        {tabs.map((tab, index) => (
          <div key={index} className={`tabCon ${activeTab === index ? 'active' : ''}`}>
            {activeTab === index && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
