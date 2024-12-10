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
import { auth } from '@/api/axiosInstance';

// dirtyFields : 기본값이 수정된 필드
// touchedFields : 사용자의 의해 수정된 필드들
// watch : 구독 값 실시간 체크 (값에 따라 리렌더링 발생)
// getValues : 값 반환, (리렌더링, 해당 값 추적 X)
const UserEstimationPage = () => {
  const {
    register,
    formState: { errors, dirtyFields },
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
      is_reception: false,
    },
  });

  // 지역 data api
  const [apiLocation, setApiLocation] = useState<ILocation | []>([]);
  const locationData = async () => {
    try {
      const data = await fetchServiceLocation();
      return setApiLocation(data);
    } catch (err) {
      console.error(err);
    }
  };

  // 렌더링시 api 호출
  useEffect(() => {
    locationData();
    console.log(apiLocation);
  }, []);

  // wedding location에 넘겨줄 state
  const [select, setSelect] = useState<string | null>(null);
  const [selectDetail, setSelectDetail] = useState<string | null>(null);

  // POST 요청을 처리하는 함수
  const postEstimationData = async (formData: IEstimationForm) => {
    try {
      // location 데이터를 매칭하는 함수
      const findLocationKey = (location: string | null): string | undefined => {
        if (!location) return undefined;
        for (const [region, areas] of Object.entries(apiLocation)) {
          if (Array.isArray(areas)) {
            for (const area of areas) {
              const matched = Object.entries(area).find(([k]) => k === location);
              if (matched) return matched[1];
            }
          } else if (region === location) {
            return areas; // 광역시나 특별시의 경우
          }
        }
        return undefined;
      };

      // location 매칭
      const matchedLocation = findLocationKey(select, selectDetail);

      if (!matchedLocation) {
        console.log('선택한 지역이 서버 데이터와 일치하지 않습니다.');
        return;
      }

      // POST 요청 데이터 생성
      const payload = {
        service_list: Array.isArray(formData.service_list) ? formData.service_list : [formData.service_list],
        prefer_gender: formData.prefer_gender === 'man' ? 'M' : formData.prefer_gender === 'woman' ? 'F' : 'ANY',
        wedding_hall: formData.wedding_hall,
        wedding_datetime: formData.wedding_datetime,
        location: matchedLocation,
      };

      console.log('Payload:', payload);

      // 서버로 POST 요청
      const response = await auth.post('/estimations/request/', payload);
      console.log(response, '견적 요청이 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('POST 요청 실패:', error);
      console.log('견적 요청 중 오류가 발생했습니다.');
    }
  };
  // 광역시, 특별시는 선택되었을때 견적요청하기 버튼 활성화되는 조건필요
  // 캘린더, 시간도 기본값 아닌 내용 채워졌을때 버튼 활성화
  // 희망일정 선택시 금일 날짜 이후 선택
  // 제출버튼을 눌렀을때 각 칸이 채워졌는지 검증하면서 +토스트
  // 제출버튼 클릭후에는 서버응답 200일 경우 토스트 띄우고 메인

  const findLocation = (location: string, locationDetail: string | null): string | void => {
    if (location) {
      console.log('apiLocation:', apiLocation);
      console.log('select, selectDetail:', select, selectDetail);
    } else if (locationDetail) {
      return location;
    } else if (!location) {
      console.log('지역정보를 불러올수 없습니다.');
    }
  };

  // 폼 제출 처리
  const submitClick = (data: IEstimationForm) => {
    // console.log('data:', data);
    // // console.log(Object.entries(data));
    // const service = watch('service_list');
    // const gender = getValues('prefer_gender');
    // const datetime = getValues('wedding_datetime');
    // const hall = getValues('wedding_hall');
    // const location = select;
    // const locationDetail = selectDetail;
    // console.log(service, gender, datetime, location, locationDetail, hall);

    findLocation(select, selectDetail);
    console.log(data);
    // api 요청처리
    postEstimationData(data);
  };

  return (
    <>
      <div className='userEstimationPage contentLayout'>
        <PageTitle title='견적 요청하기' isPrevBtn={true} prevUrl='/' />
        <div className='contents'>
          <MediumTitle extraClass='mainTitle' title='견적 요청서' />
          <form onSubmit={handleSubmit(submitClick)}>
            <div className='service'>
              <SmallTitle title='서비스 선택' />
              <div className='choose'>
                <span className='chkBox'>
                  <input
                    type='checkbox'
                    id='mc'
                    value='mc'
                    {...register('service_list', { required: '서비스를 선택해 주세요.' })}
                  />
                  <label htmlFor='mc'>결혼식 사회자</label>
                </span>
                <span className='chkBox'>
                  <input type='checkbox' id='video' value='video' {...register('service_list')} />
                  <label htmlFor='video'>영상 촬영</label>
                </span>
                <span className='chkBox'>
                  <input type='checkbox' id='snap' value='snap' {...register('service_list')} />
                  <label htmlFor='snap'>스냅 촬영</label>
                </span>
                <span className='chkBox'>
                  <input type='checkbox' id='singer' value='singer' {...register('service_list')} />
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
                  selectDetail={selectDetail}
                  setSelectDetail={setSelectDetail}
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
              <div className='is_reception'>
                <label>
                  <XSmallTitle title='2부 예식을 진행하나요?' />
                </label>
                <div className='choose'>
                  <span className='rdoBox'>
                    <input
                      type='radio'
                      id='yes'
                      value='true'
                      {...register('is_reception', { required: '2부 예식 여부를 선택해 주세요.' })}
                    />
                    <label htmlFor='yes'>예</label>
                    <input type='radio' id='no' value='false' {...register('is_reception')} />
                    <label htmlFor='no'>아니오</label>
                    {errors.is_reception && <span className='errorMsg'>{errors.is_reception.message}</span>}
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
