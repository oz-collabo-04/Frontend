import '@/styles/ExpertProfileEditPage/main.scss';
import { useEffect, useRef, useState } from 'react';
import MainBtn from '@/components/Button/MainBtn';
import PageTitle from '@/components/PageTitle/PageTitle';
import { ExpertRegister } from '@/config/types';
import { expertRegister } from '@/config/const';
import ProfileSection from '@/uiComponents/ExpertProfileEditPage/ProfileSection';
import LocationSection from '@/uiComponents/ExpertProfileEditPage/LocationSection';
import ServiceSection from '@/uiComponents/ExpertProfileEditPage/ServiceSection';
import CareerSection from '@/uiComponents/ExpertProfileEditPage/CareerSection';
import { fetchGetExpertRegister, fetchPatchExpertRegister, fetchPostExpertRegister } from '@/api/experts';

export default function ExpertProfileEditPage() {
  const [profileData, setProfileData] = useState<ExpertRegister>(expertRegister);
  const fileRef = useRef<HTMLInputElement>(null);
  const [isExpert, setIsExpert] = useState(false); // 임시코드. 일단 전문가 아이디 확정되면 전문가아이디에 따라 boolean

  useEffect(() => {
    if (profileData.id && isExpert) {
      getData(profileData.id);
    }
  }, [profileData.id, isExpert]);

  const getData = async (id: string) => {
    try {
      const data = await fetchGetExpertRegister(id);
      console.log('get', data);
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
      setProfileData((prev) => ({ ...prev, id: data.id }));
    } catch (err) {
      console.error(err);
    }
  };

  const patchData = async (id: string, formData: FormData) => {
    try {
      const data = await fetchPatchExpertRegister({ id, formData });
      console.log('patch', data);
      setProfileData((prev) => ({
        ...prev,
        ...data,
      }));
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
      await patchData(profileData.id!, formData);
    } else {
      await postData(formData);
      setIsExpert(true);
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
