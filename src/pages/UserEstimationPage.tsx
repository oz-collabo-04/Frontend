import MainBtn from '@/components/Button/MainBtn';
import Checkbox from '@/components/Checkbox/Checkbox';
import Input from '@/components/Input/Input';
import PageTitle from '@/components/PageTitle/PageTitle';
import Radio from '@/components/Radio/Radio';
import SmallTitle from '@/components/Title/SmallTitle';
import XSmallTitle from '@/components/Title/XSmallTitle';
import '@/styles/UserEstimationPage/userEstimation.scss';

const UserEstimationPage = () => {
  return (
    <>
      <div className='userEstimationPage'>
        <PageTitle title='견적 요청하기' isPrevBtn={true} prevUrl='/' />
        <div className='contents'>
          <div className='service'>
            <SmallTitle title='서비스 선택' />
            <div className='service choose'>
              <Checkbox idFor='service1' content='사회자' />
              <Checkbox idFor='service2' content='영상 촬영' />
              <Checkbox idFor='service3' content='스냅 촬영' />
              <Checkbox idFor='service4' content='축가 가수' />
            </div>
          </div>
          <div className='date'>
            <SmallTitle title='희망 일정 선택' />
          </div>
          <div className='location'>
            <SmallTitle title='지역 선택' />
          </div>
          <div className='hallName'>
            <SmallTitle title='웨딩홀 이름' />
            <Input type='text' placeholder='웨딩홀 이름을 작성해 주세요' width='100%' />
          </div>
          <div className='time'>
            <SmallTitle title='예식 시간' />
          </div>
          <div className='method'>
            <SmallTitle title='예식 방식' />
            <div className='recessional'>
              <XSmallTitle title='2부 예식을 진행하나요?' />
              <div className='choose'>
                <Radio idFor='yes' content='예' name='recessional' />
                <Radio idFor='no' content='아니오' name='recessional' />
              </div>
            </div>
          </div>
          <div className='estimationBtn'>
            <MainBtn name='견적 요청하기' extraClass='extraClass' />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEstimationPage;
