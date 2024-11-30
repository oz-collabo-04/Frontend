import '@/styles/ExpertProfileEditPage/main.scss';
import { useEffect, useRef, useState } from 'react';
import MainBtn from '@/components/Button/MainBtn';
import PageTitle from '@/components/PageTitle/PageTitle';
import { Career, ExpertRegister } from '@/config/types';
import ProfileSection from '@/uiComponents/ExpertProfileEditPage/ProfileSection';
import LocationSection from '@/uiComponents/ExpertProfileEditPage/LocationSection';
import ServiceSection from '@/uiComponents/ExpertProfileEditPage/ServiceSection';
import CareerSection from '@/uiComponents/ExpertProfileEditPage/CareerSection';
import { fetchGetExpertRegister, fetchPatchExpertRegister, fetchPostExpertRegister } from '@/api/experts';
import { useExpertStore } from '@/store/expertStore';
import { useToastStore } from '@/store/toastStore';
import { fetchServiceLocation, fetchServiceServices } from '@/api/services';
import { useConfirmStore } from '@/store/confirmStore';
import Confirm from '@/components/Confirm/Confirm';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import useUserStateStore from '@/store/useUserStateStore';
// import useUserStateStore from '@/store/useUserStateStore';

interface LocationDummy {
  [key: string]: { [key: string]: string }[] | string;
}
interface LocatioinObject {
  [key: string]: string;
}

export default function ExpertProfileEditPage() {
  const { isExpert, setIsExpert } = useUserStateStore();
  const { expert, setExpert } = useExpertStore();
  const { addToasts } = useToastStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [profileData, setProfileData] = useState<ExpertRegister>({
    available_location: expert.available_location ?? [],
    available_location_display: expert.available_location_display! ?? [],
    appeal: expert.appeal ?? '',
    service: expert.service ?? '',
    service_display: expert.service_display! ?? '',
    careers: expert.careers ?? [],
    expert_image: expert.expert_image ?? '',
  });

  const fileRef = useRef<HTMLInputElement>(null);
  const [isAppeals, setIsAppeals] = useState<boolean>(false);

  const [enlocation, setEnLocation] = useState<LocationDummy | []>([]);
  const [enService, setEnService] = useState([]);

  const { openConfirm, closeConfirm } = useConfirmStore();
  const navigate = useNavigate();

  useEffect(() => {
    locationData();
    serviceData();
  }, []);

  useEffect(() => {
    if (isExpert) {
      getData();

      console.log('전문가 정보', expert);
    }
  }, [isExpert === true]);

  const getData = async () => {
    try {
      const data = await fetchGetExpertRegister();
      console.log('get', data);
      setIsLoading((e) => !e);

      setExpert(data);

      setProfileData((prev) => ({
        ...prev,
        ...data,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const postData = async (formData: FormData) => {
    try {
      const data = await fetchPostExpertRegister(formData);
      console.log('post', data);
    } catch (err) {
      console.error(err);
    }
  };

  const patchData = async (formData: FormData) => {
    try {
      const data = await fetchPatchExpertRegister(formData);
      console.log('patch', data);
      setExpert(data);
    } catch (err) {
      console.error(err);
    }
  };

  const locationData = async () => {
    try {
      const data = await fetchServiceLocation();
      setIsLoading((e) => !e);
      setEnLocation(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const serviceData = async () => {
    try {
      const data = await fetchServiceServices();
      setIsLoading((e) => !e);
      return setEnService(data);
    } catch (err) {
      console.error(err);
    }
  };

  const submitClick = async () => {
    const length1 = profileData!.available_location_display!.filter((e) => e.split(' ').length === 1);
    const length2 = profileData!.available_location_display!.filter((e) => e.split(' ').length === 2);

    const enLocationArray: string[] = [];

    length1.filter((e) =>
      Object.entries(enlocation).filter(
        ([key, value]) => e === key && typeof value === 'string' && enLocationArray.push(value)
      )
    );

    length2.filter((e) =>
      Object.entries(enlocation).filter(
        ([key, value]) =>
          e.split(' ')[0] === key &&
          Object.values(value).filter(
            (el: LocatioinObject) => Object.entries(el)[0][0] === e && enLocationArray.push(Object.entries(el)[0][1])
          )
      )
    );

    let enServiceString;

    Object.entries(enService).filter(
      ([, value]) =>
        profileData.service_display === Object.values(value)[1] && (enServiceString = Object.values(value)[0])
    );

    const newArray: Career[] = [];

    Object.values(profileData.careers).map((career) => {
      const obj = career;
      const { id, ...rest } = obj;
      return newArray.push(rest);
    });

    const formData = new FormData();

    if (fileRef.current?.files?.[0]) {
      formData.append('expert_image', fileRef.current?.files?.[0]);
    }

    enLocationArray.map((location) => formData.append('available_location', location));
    formData.append('appeal', profileData.appeal);
    formData.append('service', enServiceString!);
    formData.append('careers', JSON.stringify(newArray));

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    if (isExpert) {
      await patchData(formData);
      addToasts({ type: 'success', title: '프로필이 수정되었습니다.', id: Date.now().toString() });
    } else {
      if (
        profileData.appeal !== '' &&
        profileData.available_location_display!.length > 0 &&
        profileData.careers.length > 0 &&
        fileRef.current?.files?.[0] !== undefined &&
        profileData.service_display !== ''
      ) {
        await postData(formData);

        if (setIsExpert) {
          setIsExpert(true);
        }

        addToasts({ type: 'success', title: '프로필이 등록되었습니다.', id: Date.now().toString() });
      } else {
        addToasts({ type: 'error', title: '모두 입력하셔야 합니다', id: Date.now().toString() });
      }
    }
  };

  const prevCheck = () => {
    if (
      expert.expert_image !== profileData.expert_image ||
      expert.appeal !== profileData.appeal ||
      expert.available_location_display !== profileData.available_location_display ||
      expert.service_display !== profileData.service_display ||
      expert.careers !== profileData.careers
    ) {
      return openConfirm('preCheckConfirm');
    }

    return navigate('/');
  };

  if (!isLoading) {
    return (
      <>
        <LoadingSpinner className='expertProfileEditSpinner' />
      </>
    );
  }

  return (
    <>
      <div className='expertProfileEditPage contentLayout' onClick={() => setIsAppeals(true)}>
        <PageTitle
          title={isExpert ? '전문가 프로필 관리' : '전문가 프로필 등록'}
          isPrevBtn={true}
          onAddClickFunction={prevCheck}
        />

        <Confirm
          confirmId='preCheckConfirm'
          title='저장하지 않은 데이터가 남아있습니다.'
          content='저장하지 않고 나가시겠습니까?'
          width='35em'
          height='17vh'
          borderRadius='2rem'
          trueBtn={true}
          trueBtnName='나가기'
          trueBtnOnClick={() => {
            closeConfirm('preCheckConfirm');
            return navigate('/');
          }}
          falseBtn={true}
          falseBtnName='머무르기'
          falseBtnOnClick={() => {
            closeConfirm('preCheckConfirm');
          }}
        />
        <main className='expertProfileEditMain'>
          <ProfileSection
            fileRef={fileRef}
            profileData={profileData}
            setProfileData={setProfileData}
            isAppeals={isAppeals}
            setIsAppeals={setIsAppeals}
          />

          <LocationSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <ServiceSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <CareerSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <MainBtn onClick={submitClick} name={isExpert ? '저장하기' : '등록하기'} extraClass='submitBtn' />
        </main>
      </div>
    </>
  );
}
