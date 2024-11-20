import Modal from '@/components/Modal/Modal';
import MediumTitle from '@/components/Title/MediumTitle';
import ServiceModal from './ServiceModal';
import { ExpertRegister } from '@/config/types';
import { useModalStore } from '@/store/modalStore';
import { useState } from 'react';

type Props = {
  isExpert: boolean;
  profileData: ExpertRegister;
  setProfileData: React.Dispatch<React.SetStateAction<ExpertRegister>>;
};

type Service = {
  name: string;
  check: boolean;
};

export default function ServiceSection({ isExpert, profileData, setProfileData }: Props) {
  const { openModal, closeModal } = useModalStore();
  const [isChecked, setIsChecked] = useState<Service[]>([
    {
      name: '결혼식 사회자',
      check: profileData.service == '결혼식 사회자' ? true : false,
    },
    {
      name: '축가 가수',
      check: profileData.service == '축가 가수' ? true : false,
    },
    {
      name: '영상 촬영',
      check: profileData.service == '영상 촬영' ? true : false,
    },
    {
      name: '스냅 촬영',
      check: profileData.service == '스냅 촬영' ? true : false,
    },
  ]);

  return (
    <>
      <section className='expertProfileEditSection'>
        <MediumTitle title='제공 서비스' />
        <div className='service content'>
          <button onClick={() => openModal('serviceModal')} className='changeBtn'>
            {isExpert ? '수정' : '등록'}
          </button>
          <p>{profileData.service}</p>
        </div>
        <Modal
          modalId='serviceModal'
          title='제공 서비스'
          content={<ServiceModal isChecked={isChecked} setIsChecked={setIsChecked} />}
          height='50vh'
          borderRadius='2rem'
          firstBtn={true}
          firstBtnName='저장하기'
          firstBtnOnClick={() => {
            setProfileData((prev) => ({
              ...prev,
              service: isChecked.find((service) => service.check === true)?.name ?? '',
            }));
            closeModal('serviceModal');
          }}
        />
      </section>
    </>
  );
}
