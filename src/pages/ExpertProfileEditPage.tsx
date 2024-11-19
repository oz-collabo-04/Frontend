import '@/styles/ExpertProfileEditPage/main.scss';
import { LuPlusCircle } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';
import Input from '@/components/Input/Input';
import MediumTitle from '@/components/Title/MediumTitle';
import MainBtn from '@/components/Button/MainBtn';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import LocationModal from '@/uiComponents/ExpertProfileEditPage/LocationModal';
import CareerModal from '@/uiComponents/ExpertProfileEditPage/CareerModal';
import PageTitle from '@/components/PageTitle/PageTitle';
import { fetchExpertRegister } from '@/api/expertRegister';
import { ExpertRegister } from '@/config/types';
import { expertRegister } from '@/config/const';
import ServiceSection from '@/uiComponents/ExpertProfileEditPage/ServiceSection';

export default function ExpertProfileEditPage() {
  const [profileData, setProfileData] = useState<ExpertRegister>(expertRegister);
  const fileRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(profileData.profile_image || '');
  const [textChange, setTextChange] = useState<string>('');

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

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, profile_image: imageUrl }));
      setPreviewImage(imageUrl);
    }
  };

  useEffect(() => {
    if (previewImage) {
      return () => URL.revokeObjectURL(previewImage);
    }
  }, [previewImage]);

  const fetchData = async (formData: FormData) => {
    try {
      const data = await fetchExpertRegister(formData);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const submitClick = () => {
    const formData = new FormData();

    if (fileRef.current?.files?.[0]) {
      formData.append('profile_image', fileRef.current.files[0]);
    }

    formData.append('available_location', JSON.stringify(profileData.available_location));
    formData.append('appeal', profileData.appeal);
    formData.append('service', profileData.service);
    formData.append('careers', JSON.stringify(profileData.careers));

    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    fetchData(formData);
  };

  return (
    <>
      <div className='expertProfileEditPage contentLayout'>
        <PageTitle title={isExpert ? '프로필 관리' : '프로필 등록'} isPrevBtn={true} prevUrl='/' />

        <main className='expertProfileEditMain'>
          <section className='expertProfileEditSection'>
            <MediumTitle title='프로필 설정' />
            <div className='profile content'>
              <p>프로필 이미지 ( {profileData.profile_image ? '1' : '0'} / 1 )</p>
              <div>
                <label htmlFor='fileInput'>
                  <LuPlusCircle size='2rem' />

                  <input
                    ref={fileRef}
                    onChange={onUploadImage}
                    id='fileInput'
                    type='file'
                    style={{ display: 'none' }}
                    accept='image/*'
                  />
                </label>
                {profileData.profile_image && <img src={previewImage!} alt='이미지있으면보임' />}
              </div>

              <p>프로필 설명</p>
              <Input
                value={textChange}
                onChange={(e) => setTextChange(e.target.value)}
                type='text'
                placeholder='설명글'
                width='50rem'
              />
              <button onClick={() => setProfileData((prev) => ({ ...prev, appeal: textChange }))} className='doneBtn'>
                완료
              </button>
            </div>
          </section>

          <section className='expertProfileEditSection'>
            <MediumTitle title='활동 지역' />
            <div className='location content'>
              <button onClick={() => openModal('locationModal')} className='changeBtn'>
                {isExpert ? '수정' : '등록'}
              </button>
              <div>
                <p>서울시 강남구</p>
                <p>서울시 강남구</p>
                <p>서울시 강남구</p>
              </div>
              <p>경기도 분당시 외 6곳</p>
            </div>
            <Modal
              modalId='locationModal'
              title='활동 지역'
              content={<LocationModal />}
              height='60vh'
              borderRadius='2rem'
              firstBtn={true}
              firstBtnName='저장하기'
              firstBtnOnClick={() => console.log('활동 지역 모달 버튼')}
            />
          </section>

          <ServiceSection isExpert={isExpert} setProfileData={setProfileData} />

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
