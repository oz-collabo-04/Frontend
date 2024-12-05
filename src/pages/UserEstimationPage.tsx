import '@/styles/UserEstimationPage/main.scss';
import '@/global.scss';
import MainBtn from '@/components/Button/MainBtn';
import PageTitle from '@/components/PageTitle/PageTitle';
import SmallTitle from '@/components/Title/SmallTitle';
import XSmallTitle from '@/components/Title/XSmallTitle';
import MediumTitle from '@/components/Title/MediumTitle';
import { useForm } from 'react-hook-form';
import { IEstimationForm, ILocation } from '@/config/types';
import { fetchServiceLocation } from '@/api/services';
import { useEffect, useState } from 'react';
import WeddingLocation from '@/uiComponents/UserEstimationEdit/WeddingLocation';

// dirtyFields : 기본값이 수정된 필드
// touchedFields : 사용자의 의해 수정된 필드들
// watch : 구독 값 실시간 체크 (값에 따라 리렌더링 발생)
// getValues : 값 반환, (리렌더링, 해당 값 추적 X)
const UserEstimationPage = () => {
  const {
    register,
    formState: { errors, dirtyFields, touchedFields },
    handleSubmit,
    watch,
    getValues,
  } = useForm<IEstimationForm>({
    mode: 'onSubmit',
    defaultValues: {
      service_list: '',
      prefer_gender: '',
      wedding_datetime: '',
      location: '',
      wedding_hall: '',
    },
  });

  // 지역선택 시, 시,도 하위 내용이 없을경우 선택 X
  // 광역시, 특별시는 선택되었을때 견적요청하기 버튼 활성화되는 조건필요
  // 캘린더, 시간도 기본값 아닌 내용 채워졌을때 버튼 활성화
  // 희망일정 선택시 금일 날짜 이후 선택

  const [enLocation, setEnLocation] = useState<ILocation | []>([]);

  const locationData = async () => {
    try {
      const data = await fetchServiceLocation();
      return setEnLocation(data);
    } catch (err) {
      console.error(err);
    }
  };

  const [select, setSelect] = useState<string | null>(null);
  const [selectDetailData, setSelectDetailData] = useState<string | null>(null);

  const testSubmitClick = (data: IEstimationForm) => {
    console.log('errors:', errors);
    console.log('dirtyFields:', dirtyFields);
    console.log('touchedFields:', touchedFields);
    console.log(JSON.stringify(data));
    console.log('data:', data);
    console.log(Object.entries(data));
    // API 요청 처리
    const service = getValues('service_list');
    const gender = getValues('prefer_gender');
    const datetime = getValues('wedding_datetime');
    const location = select;
    const locationDetail = selectDetailData;
    const hall = getValues('wedding_hall');
    console.log(service, gender, datetime, location, locationDetail, hall);
    console.log(select, selectDetailData);
  };

  useEffect(() => {
    locationData();
  }, []);

  return (
    <>
      <div className='userEstimationPage contentLayout'>
        <PageTitle title='견적 요청하기' isPrevBtn={true} prevUrl='/' />
        <div className='contents'>
          <MediumTitle extraClass='mainTitle' title='견적 요청서' />
          <form onSubmit={handleSubmit(testSubmitClick)}>
            <div className='service'>
              <SmallTitle title='서비스 선택' />
              <div className='choose'>
                <span className='rdoBox'>
                  <input
                    type='radio'
                    id='mc'
                    value='mc'
                    {...register('service_list', { required: '서비스를 선택해 주세요.' })}
                  />
                  <label htmlFor='mc'>결혼식 사회자</label>
                </span>
                <span className='rdoBox'>
                  <input type='radio' id='video' value='video' {...register('service_list')} />
                  <label htmlFor='video'>영상 촬영</label>
                </span>
                <span className='rdoBox'>
                  <input type='radio' id='snap' value='snap' {...register('service_list')} />
                  <label htmlFor='snap'>스냅 촬영</label>
                </span>
                <span className='rdoBox'>
                  <input type='radio' id='singer' value='singer' {...register('service_list')} />
                  <label htmlFor='singer'>축가 가수</label>
                </span>
                {errors.service_list && <span className='errorMsg'>{errors.service_list.message}</span>}
              </div>
            </div>
            <div className='gender'>
              <SmallTitle title='전문가 선호 성별' />
              <div className='choose'>
                <span className='rdoBox'>
                  <input
                    type='radio'
                    id='man'
                    value='man'
                    {...register('prefer_gender', { required: '성별을 선택해 주세요.' })}
                  />
                  <label htmlFor='man'>남성</label>
                </span>
                <span className='rdoBox'>
                  <input type='radio' id='woman' value='woman' {...register('prefer_gender')} />
                  <label htmlFor='woman'>여성</label>
                </span>
                <span className='rdoBox'>
                  <input type='radio' id='anyGender' value='anyGender' {...register('prefer_gender')} />
                  <label htmlFor='anyGender'>상관 없음</label>
                </span>
              </div>
              {errors.prefer_gender && <span className='errorMsg'>{errors.prefer_gender.message}</span>}
            </div>
            <div className='dateTime'>
              <SmallTitle title='예식 일정 및 예식 시간' />
              <div className='time'>
                <input
                  className='comInput'
                  type='datetime-local'
                  id='dateTime'
                  {...register('wedding_datetime', { required: '일정을 선택해 주세요.' })}
                />
              </div>
              {errors.wedding_datetime && <span className='errorMsg'>{errors.wedding_datetime.message}</span>}
            </div>
            <div className='location'>
              <SmallTitle title='지역 선택' />
              <div>
                <WeddingLocation
                  select={select}
                  setSelect={setSelect}
                  selectDetailData={selectDetailData}
                  setSelectDetailData={setSelectDetailData}
                />
              </div>
            </div>
            <div className='hallName'>
              <SmallTitle title='웨딩홀 이름' />
              <input
                className='comInput'
                type='text'
                placeholder='웨딩홀 이름을 작성해 주세요'
                {...register('wedding_hall', { required: '웨딩홀 이름은 필수 항목입니다.' })}
              />
              {errors.wedding_hall && <span className='errorMsg'>{errors.wedding_hall.message}</span>}
            </div>
            <div className='method'>
              <SmallTitle title='예식 방식' />
              <div className='recessional'>
                <label>
                  <XSmallTitle title='2부 예식을 진행하나요?' />
                </label>
                <div className='choose'>
                  <span className='rdoBox'>
                    <input
                      type='radio'
                      id='yes'
                      value='true'
                      {...register('recessional', { required: '2부 예식 여부를 선택해 주세요.' })}
                    />
                    <label htmlFor='yes'>예</label>
                    <input type='radio' id='no' value='false' {...register('recessional')} />
                    <label htmlFor='no'>아니오</label>
                    {errors.recessional && <span className='errorMsg'>{errors.recessional.message}</span>}
                  </span>
                </div>
              </div>
            </div>
            <div className='estimationBtn'>
              <MainBtn name='견적 요청하기' extraClass='extraClass' type='submit' disabled={false} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserEstimationPage;
