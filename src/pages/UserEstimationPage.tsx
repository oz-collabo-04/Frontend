import '@/styles/UserEstimationPage/main.scss';
import '@/global.scss';
import MainBtn from '@/components/Button/MainBtn';
import Checkbox from '@/components/Checkbox/Checkbox';
import Input from '@/components/Input/Input';
import PageTitle from '@/components/PageTitle/PageTitle';
import Radio from '@/components/Radio/Radio';
import SmallTitle from '@/components/Title/SmallTitle';
import XSmallTitle from '@/components/Title/XSmallTitle';
import MediumTitle from '@/components/Title/MediumTitle';

const UserEstimationPage = () => {
  // 지역선택 시, 시,도 하위 내용이 없을경우 선택 X
  // 광역시, 특별시는 선택되었을때 견적요청하기 버튼 활성화되는 조건필요
  // 내용이 다 채워지지 않았을 경우 견적요청버튼 비활성화
  // 캘린더, 시간도 기본값 아닌 내용 채워졌을때 버튼 활성화
  // 희망일정 선택시 금일 날짜 이후 선택

  return (
    <>
      <div className='userEstimationPage contentLayout'>
        <PageTitle title='견적 요청하기' isPrevBtn={true} prevUrl='/' />
        <div className='contents'>
          <MediumTitle extraClass={'mainTitle'} title='견적 요청서' />
          <div className='service'>
            <SmallTitle title='서비스 선택' />
            <div className='choose'>
              <Checkbox idFor='service1' content='사회자' />
              <Checkbox idFor='service2' content='영상 촬영' />
              <Checkbox idFor='service3' content='스냅 촬영' />
              <Checkbox idFor='service4' content='축가 가수' />
            </div>
          </div>
          <div className='gender'>
            <XSmallTitle title='전문가 선호 성별' />
            <div className='choose'>
              <Radio idFor='man' content='남성' name='gender' />
              <Radio idFor='women' content='여성' name='gender' />
              <Radio idFor='anyGender' content='상관 없음' name='gender' />
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
