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
import { fetchEstimationsEdit } from '@/api/estimations';
import { useToastStore } from '@/store/toastStore';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

export const findLocationKey = (
  apiLocation: ILocation | undefined,
  location: string | null,
  locationDetail: string | null
): string | undefined => {
  if (!location || !apiLocation) return undefined;
  for (const [region, areas] of Object.entries(apiLocation)) {
    if (Array.isArray(areas)) {
      for (const area of areas) {
        const label = Object.keys(area)[0]; // 지역이름
        const value = Object.values(area)[0]; // 지역이름
        const matched = location + ' ' + locationDetail === label ? value : false;
        if (matched) return matched;
      }
    } else if (region === location) {
      return areas; // 광역시나 특별시의 경우
    }
  }
  return undefined;
};

// dirtyFields : 기본값이 수정된 필드
// touchedFields : 사용자의 의해 수정된 필드들
// watch : 구독 값 실시간 체크 (값에 따라 리렌더링 발생)
// getValues : 값 반환, (리렌더링, 해당 값 추적 X)
const UserEstimationPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
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

  const { addToasts } = useToastStore();
  const navigate = useNavigate();
  // 지역 data api
  const [apiLocation, setApiLocation] = useState<ILocation>();
  // wedding location에 넘겨줄 state
  const [select, setSelect] = useState<string | null>(null);
  const [selectDetail, setSelectDetail] = useState<string | null>(null);

  // 렌더링시 api 호출
  useEffect(() => {
    const locationData = async () => {
      try {
        const data = await fetchServiceLocation();
        setApiLocation(data);
      } catch (err) {
        console.error(err);
      }
    };
    locationData();
  }, []);

  // 광역시, 특별시는 선택되었을때 견적요청하기 버튼 활성화되는 조건필요
  // 캘린더, 시간도 기본값 아닌 내용 채워졌을때 버튼 활성화
  // 희망일정 선택시 금일 날짜 이후 선택 => 서버응답 에러 났을 때 토스트 띄우는것으로 해결
  // 제출버튼을 눌렀을때 각 칸이 채워졌는지 검증하면서 + 토스트

  // 토스트-페이지 핸들링
  const handleResponse = async (
    apiCall: () => Promise<any>, // 실행할 API 호출 함수
    successMsg: string, // 성공 시 표시할 메시지
    errorMsg: string // 기본 에러메시지 (서버에러 메시지를 안줄때 표시)
  ) => {
    try {
      // API 호출 실행
      const response = await apiCall();

      // 상태 코드가 201인 경우
      if (response.status === 201 || response.status === 200) {
        addToasts({
          type: 'success',
          title: successMsg,
          id: Date.now().toString(),
        });
        navigate('/');
      }
      return response;
    } catch (error: any) {
      const axiosError: any = error as AxiosError;
      const responseData = axiosError.response?.data;

      // 특정한 에러 메시지가 있는 경우 처리
      if (responseData?.wedding_datetime && Array.isArray(responseData.wedding_datetime)) {
        // wedding_datetime 에러 메시지가 존재할 경우 해당 메시지 표시
        addToasts({
          type: 'error',
          title: responseData.wedding_datetime.join(', '), // 배열 메시지 병합
          id: Date.now().toString(),
        });
      } else {
        // 서버에서 detail, message를 제공시 해당 msg 사용, 없으면 기본 에러 msg 사용
        const errorMessage = responseData?.detail || responseData?.message || errorMsg;

        // 일반적인 에러 메시지 토스트로 표시
        addToasts({
          type: 'error',
          title: errorMessage,
          id: Date.now().toString(),
        });
      }

      // 콘솔 로그로 디버깅 정보 출력 (개발용)
      // console.error('API 호출 실패:', axiosError);
      // console.error('응답 데이터:', responseData);
    }
  };

  const submitClick = async (formData: IEstimationForm) => {
    // 지역매칭
    const matchedLocation = findLocationKey(apiLocation, select, selectDetail);

    if (!matchedLocation) {
      addToasts({
        type: 'error',
        title: '선택한 지역이 서버 데이터와 일치하지 않습니다.',
        id: Date.now().toString(),
      });
      return;
    }

    // payload 생성
    const payload = {
      service_list: Array.isArray(formData.service_list) ? formData.service_list : [formData.service_list],
      prefer_gender: formData.prefer_gender === 'man' ? 'M' : formData.prefer_gender === 'woman' ? 'F' : 'ANY',
      wedding_hall: formData.wedding_hall,
      wedding_datetime: formData.wedding_datetime,
      location: matchedLocation,
    };

    // POST 요청을 처리하는 함수
    try {
      // handleResponse로 서버status에 따른 토스트메세지 표현
      // POST요청(formdata 포함)
      await handleResponse(
        () => fetchEstimationsEdit(payload),
        '견적 요청이 완료되었습니다.',
        '견적 요청 처리 중 서버 오류가 발생했습니다.'
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='userEstimationPage contentLayout'>
        <PageTitle title='견적 요청하기' isPrevBtn={true} prevUrl='/' />
        <div className='contents'>
          <MediumTitle extraClass='mainTitle' title='견적 요청서' />
          <form onSubmit={handleSubmit(submitClick)}>
            <div className='serviceWrapper'>
              <SmallTitle extraClass='service' title='서비스 선택' />
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
              </div>
              {errors.service_list && <div className='errorMsg'>{errors.service_list.message}</div>}
            </div>
            <div className='genderWrapper'>
              <SmallTitle extraClass='gender' title='전문가 선호 성별' />
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
              {errors.prefer_gender && <div className='errorMsg'>{errors.prefer_gender.message}</div>}
            </div>
            <div className='dateTimeWrapper'>
              <SmallTitle extraClass='weddingDateTime' title='예식 일정 및 예식 시간' />
              <div className='time'>
                <input
                  className='comInput'
                  type='datetime-local'
                  id='dateTime'
                  {...register('wedding_datetime', {
                    required: '일정을 선택해 주세요. 예정일은 오늘로부터 7일 이후여야 합니다.',
                  })}
                />
              </div>
              {errors.wedding_datetime && <div className='errorMsg'>{errors.wedding_datetime.message}</div>}
            </div>
            <div className='locationWrapper'>
              <SmallTitle extraClass='location' title='지역 선택' />
              <div>
                <WeddingLocation
                  select={select}
                  setSelect={setSelect}
                  selectDetail={selectDetail}
                  setSelectDetail={setSelectDetail}
                />
              </div>
            </div>
            <div className='hallNameWrapper'>
              <SmallTitle extraClass='hallName' title='웨딩홀 이름' />
              <input
                className='comInput'
                type='text'
                placeholder='웨딩홀 이름을 작성해 주세요'
                {...register('wedding_hall', { required: '웨딩홀 이름은 필수 항목입니다.' })}
              />
              {errors.wedding_hall && <div className='errorMsg'>{errors.wedding_hall.message}</div>}
            </div>
            <div className='methodWrapper'>
              <SmallTitle extraClass='method' title='예식 방식' />
              <div className='isReception'>
                <label>
                  <XSmallTitle title='2부 예식을 진행하나요?' />
                </label>
                <div className='choose'>
                  <div className='rdoBox'>
                    <input
                      type='radio'
                      id='yes'
                      value='true'
                      {...register('is_reception', { required: '2부 예식 여부를 선택해 주세요.' })}
                    />
                    <label htmlFor='yes'>예</label>
                    <input type='radio' id='no' value='false' {...register('is_reception')} />
                    <label htmlFor='no'>아니오</label>
                  </div>
                </div>
              </div>
              {errors.is_reception && <div className='errorMsg'>{errors.is_reception.message}</div>}
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
