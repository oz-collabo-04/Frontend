import '@/styles/ExpertProfileEditPage/main.scss';
import { useEffect, useRef, useState } from 'react';
import MainBtn from '@/components/Button/MainBtn';
import PageTitle from '@/components/PageTitle/PageTitle';
import { ExpertRegister } from '@/config/types';
import ProfileSection from '@/uiComponents/ExpertProfileEditPage/ProfileSection';
import LocationSection from '@/uiComponents/ExpertProfileEditPage/LocationSection';
import ServiceSection from '@/uiComponents/ExpertProfileEditPage/ServiceSection';
import CareerSection from '@/uiComponents/ExpertProfileEditPage/CareerSection';
import { fetchGetExpertRegister, fetchPatchExpertRegister, fetchPostExpertRegister } from '@/api/experts';
import { useExpertStore } from '@/store/expertStore';
import { useToastStore } from '@/store/toastStore';
import { fetchServiceLocation, fetchServiceServices } from '@/api/services';

interface LocationDummy {
  [key: string]: { [key: string]: string }[] | string;
}

export default function ExpertProfileEditPage() {
  const { expert, setExpert } = useExpertStore();
  const { addToasts } = useToastStore();

  const [profileData, setProfileData] = useState<ExpertRegister>({
    available_location: expert.id ? (expert.available_location_display! ?? []) : (expert.available_location ?? []),
    appeal: expert.appeal ?? '',
    service: expert.id ? (expert.service_display! ?? []) : (expert.service ?? []),
    careers: expert.careers ?? [],
    expert_image: expert.expert_image ?? '',
  });

  const [isExpert, setIsExpert] = useState(true);
  const fileRef = useRef<HTMLInputElement>(null);
  const [enlocation, setEnLocation] = useState<LocationDummy | []>([]);
  const [enService, setEnService] = useState([]);

  useEffect(() => {
    locationData();
    serviceData();
  }, []);

  useEffect(() => {
    if (expert.id && isExpert) {
      getData(expert.id);

      console.log('전문가 정보', expert);
    }
  }, [expert.id, isExpert]);

  const getData = async (id: string) => {
    try {
      const data = await fetchGetExpertRegister(id);
      console.log('get', data);

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

      setExpert({ id: data.id });
    } catch (err) {
      console.error(err);
    }
  };

  const patchData = async (id: string, formData: FormData) => {
    try {
      const data = await fetchPatchExpertRegister({ id, formData });
      console.log('patch', data);
    } catch (err) {
      console.error(err);
    }
  };

  const locationData = async () => {
    try {
      const data = await fetchServiceLocation();
      setEnLocation(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const serviceData = async () => {
    try {
      const data = await fetchServiceServices();
      return setEnService(data);
    } catch (err) {
      console.error(err);
    }
  };

  const submitClick = async () => {
    const length1 = profileData!.available_location.filter((e) => e.split(' ').length === 1);
    const length2 = profileData!.available_location.filter((e) => e.split(' ').length === 2);

    const enLocationArray: string[] = [];

    length1.filter((e) =>
      Object.entries(enlocation).filter(
        ([key, value]) => e === key && typeof value === 'string' && enLocationArray.push(value)
      )
    );

    length2.filter((e) =>
      Object.entries(enlocation).filter(
        ([key, value]) => e.split(' ')[0] === key && enLocationArray.push(...Object.values(value[0]))
      )
    );

    let enServiceString;

    Object.entries(enService).filter(
      ([, value]) => profileData.service === Object.values(value)[1] && (enServiceString = Object.values(value)[0])
    );

    const formData = new FormData();

    if (fileRef.current?.files?.[0]) {
      formData.append('expert_image', fileRef.current?.files?.[0]);
    }

    formData.append('available_location', JSON.stringify(enLocationArray));
    formData.append('appeal', profileData.appeal);
    formData.append('service', enServiceString!);
    formData.append('careers', JSON.stringify(profileData.careers));

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    if (isExpert) {
      await patchData(expert.id, formData);
      addToasts({ type: 'success', title: '프로필이 수정되었습니다.', id: Date.now().toString() });
    } else if (
      profileData.appeal !== '' &&
      profileData.available_location.length > 0 &&
      profileData.careers.length > 0 &&
      fileRef.current?.files?.[0] !== undefined &&
      profileData.service !== ''
    ) {
      await postData(formData);
      setIsExpert(true);
      addToasts({ type: 'success', title: '프로필이 등록되었습니다.', id: Date.now().toString() });
    } else {
      addToasts({ type: 'error', title: '모두 입력하셔야 합니다', id: Date.now().toString() });
    }
  };

  return (
    <>
      <div className='expertProfileEditPage contentLayout'>
        <PageTitle title={isExpert ? '전문가 프로필 관리' : '전문가 프로필 등록'} isPrevBtn={true} prevUrl='/' />

        <main className='expertProfileEditMain'>
          <ProfileSection fileRef={fileRef} profileData={profileData} setProfileData={setProfileData} />

          <LocationSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <ServiceSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <CareerSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <MainBtn onClick={submitClick} name={isExpert ? '저장하기' : '등록하기'} extraClass='submitBtn' />
        </main>
      </div>
    </>
  );
}
