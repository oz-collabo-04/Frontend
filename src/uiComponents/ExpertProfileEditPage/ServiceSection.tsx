import Modal from '@/components/Modal/Modal';
import MediumTitle from '@/components/Title/MediumTitle';
import ServiceModal from './ServiceModal';
import { ExpertRegister } from '@/config/types';
import { useModalStore } from '@/store/modalStore';
import { useEffect, useState } from 'react';
import { fetchServiceServices } from '@/api/services';

type Props = {
  isExpert: boolean;
  profileData: ExpertRegister;
  setProfileData: React.Dispatch<React.SetStateAction<ExpertRegister>>;
};

type ServiceArray = {
  key: string;
  label: string;
};

type Service = {
  name: string;
  check: boolean;
};

export default function ServiceSection({ isExpert, profileData, setProfileData }: Props) {
  const { openModal, closeModal } = useModalStore();
  const [serviceName, setServiceName] = useState<ServiceArray[]>([]);
  const [isChecked, setIsChecked] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchServiceServices();
        return setServiceName(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className='expertProfileEditSection'>
        <MediumTitle title='제공 서비스' />

        <div className='service content'>
          <button
            onClick={() => {
              setIsChecked(
                serviceName
                  ? serviceName.map((name) => ({
                      name: Object.values(name)[1],
                      check: profileData.service === Object.values(name)[1],
                    }))
                  : []
              );

              openModal('serviceModal');
            }}
            className='changeBtn'
          >
            {isExpert ? '수정' : '등록'}
          </button>

          <p>{profileData.service}</p>
        </div>

        <Modal
          modalId='serviceModal'
          title='제공 서비스'
          content={<ServiceModal isChecked={isChecked} setIsChecked={setIsChecked} />}
          height='40vh'
          borderRadius='2rem'
          firstBtn={isChecked.some((e) => e.check) ? true : false}
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
