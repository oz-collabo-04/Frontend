import '@/styles/ExpertProfileEditPage/main.scss';
import { useRef, useState } from 'react';
import MediumTitle from '@/components/Title/MediumTitle';
import MainBtn from '@/components/Button/MainBtn';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import CareerModal from '@/uiComponents/ExpertProfileEditPage/CareerModal';
import PageTitle from '@/components/PageTitle/PageTitle';
import { fetchExpertRegister } from '@/api/experts';
import { ExpertRegister } from '@/config/types';
import { expertRegister } from '@/config/const';
import ProfileSection from '@/uiComponents/ExpertProfileEditPage/ProfileSection';
import LocationSection from '@/uiComponents/ExpertProfileEditPage/LocationSection';
import ServiceSection from '@/uiComponents/ExpertProfileEditPage/ServiceSection';

export default function ExpertProfileEditPage() {
  const [profileData, setProfileData] = useState<ExpertRegister>(expertRegister);
  const fileRef = useRef<HTMLInputElement>(null);

  // const [profileData, setProfileData] = useState<ExpertRegister>({
  //   available_location: ['서울', '경기도 구리시'],
  //   appeal: '어필하는 설명글',
  //   service: '결혼식 사회자',
  //   careers: [
  //     {
  //       title: '결혼식 사회자',
  //       explanation: '100만 규모 결혼식 사회 진행',
  //       start_date: '2023-11-12',
  //       end_date: '2024-12-25',
  //     },
  //   ],
  //   profile_image: '이미지 url 추후에 넣을 예정',
  // });
  const [isExpert, setIsExpert] = useState(false); // 임시코드. 일단 전문가 아이디 확정되면 전문가아이디에 따라 boolean
  const { openModal } = useModalStore();

  const fetchData = async (formData: FormData) => {
    try {
      const data = await fetchExpertRegister(formData);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const submitClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    await fetchData(formData);
  };

  return (
    <>
      <div className='expertProfileEditPage contentLayout'>
        <PageTitle title={isExpert ? '프로필 관리' : '프로필 등록'} isPrevBtn={true} prevUrl='/' />

        <main className='expertProfileEditMain'>
          <ProfileSection fileRef={fileRef} profileData={profileData} setProfileData={setProfileData} />

          <LocationSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <ServiceSection isExpert={isExpert} profileData={profileData} setProfileData={setProfileData} />

          <section className='expertProfileEditSection'>
            <MediumTitle title='경력 ( 5 / 5 )' />
            <div className='career content'>
              <button onClick={() => openModal('careerModal')} className='changeBtn'>
                {isExpert ? '수정' : '등록'}
              </button>
              <p>결혼식 사회자 6년</p>
              <p>결혼식 사회자 6년</p>
              <p>결혼식 사회자 6년</p>
              <p>결혼식 사회자 6년</p>
              <p>결혼식 사회자 6년</p>
            </div>
            <Modal
              modalId='careerModal'
              title='경력 ( 0 / 5 )'
              content={<CareerModal />}
              height='70vh'
              borderRadius='2rem'
              firstBtn={true}
              firstBtnName='저장하기'
              firstBtnOnClick={() => console.log('경력 모달 버튼')}
            />
          </section>

          <MainBtn onClick={submitClick} name={isExpert ? '저장하기' : '등록하기'} extraClass='submitBtn' />
        </main>
      </div>
    </>
  );
}
