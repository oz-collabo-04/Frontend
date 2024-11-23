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

export default function ExpertProfileEditPage() {
  const { expert, setExpert } = useExpertStore();
  const [profileData, setProfileData] = useState<ExpertRegister>({
    available_location: expert.available_location ?? [],
    appeal: expert.appeal ?? '',
    service: expert.service ?? '',
    careers: expert.careers ?? [],
    expert_image: expert.expert_image ?? '',
  });
  const [isExpert, setIsExpert] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expert.id && isExpert) {
      getData(expert.id);
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

  const submitClick = async () => {
    const formData = new FormData();

    if (fileRef.current?.files?.[0]) {
      formData.append('expert_image', fileRef.current?.files?.[0]);
    }

    formData.append('available_location', JSON.stringify(profileData.available_location));
    formData.append('appeal', profileData.appeal);
    formData.append('service', profileData.service);
    formData.append('careers', JSON.stringify(profileData.careers));

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    if (isExpert) {
      await patchData(expert.id, formData);
    } else if (
      profileData.appeal !== '' &&
      profileData.available_location.length > 0 &&
      profileData.careers.length > 0 &&
      profileData.expert_image !== '' &&
      profileData.service !== ''
    ) {
      await postData(formData);
      setIsExpert(true);
    } else {
      alert('모두 입력해야합니다');
    }
  };

  console.log('전문가 정보', expert);

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
