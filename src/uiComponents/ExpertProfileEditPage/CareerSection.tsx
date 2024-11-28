import Modal from '@/components/Modal/Modal';
import MediumTitle from '@/components/Title/MediumTitle';
import CareerModal from './CareerModal';
import { useModalStore } from '@/store/modalStore';
import { Career, ExpertRegister } from '@/config/types';
import { useState } from 'react';

type Props = {
  isExpert: boolean;
  profileData: ExpertRegister;
  setProfileData: React.Dispatch<React.SetStateAction<ExpertRegister>>;
};

export default function CareerSection({ isExpert, profileData, setProfileData }: Props) {
  const { openModal, closeModal } = useModalStore();
  const [careerArray, setCareerArray] = useState<Career[]>(profileData.careers ?? []);

  const getDateDifference = (start_date: string, end_date: string | null) => {
    const endDate = end_date ? new Date(end_date) : new Date();
    const startDate = new Date(start_date!);

    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();
    const dates = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

    if (dates <= 31) {
      return `${dates.toFixed()}일`;
    }

    if (Math.floor((years * 12 + months) / 12) < 1) {
      return `${(years * 12 + months) % 12}개월`;
    } else {
      return `${Math.floor((years * 12 + months) / 12)}년 ${(years * 12 + months) % 12}개월`;
    }
  };

  return (
    <section className='expertProfileEditSection'>
      <MediumTitle title={`경력 ( ${profileData.careers.length} / 5 )`} />

      <div className='career content'>
        <button
          onClick={() => {
            setCareerArray(profileData.careers);
            openModal('careerModal');
          }}
          className='changeBtn'
        >
          {isExpert ? '수정' : '등록'}
        </button>

        {profileData.careers.map((data) => (
          <li key={data.id}>
            {data.title} {getDateDifference(data.start_date, data.end_date)} {!data.end_date && '재직중'}
          </li>
        ))}
      </div>

      <Modal
        modalId='careerModal'
        title={`경력 ( ${careerArray.length} / 5 )`}
        content={<CareerModal careerArray={careerArray} setCareerArray={setCareerArray} />}
        height='70vh'
        borderRadius='2rem'
        firstBtn={careerArray.length || profileData.careers.length ? true : false}
        firstBtnName='저장하기'
        firstBtnOnClick={() => {
          const newArray: Career[] = [];

          Object.values(careerArray).map((career) => {
            const obj = career;
            const { id, ...rest } = obj;
            return newArray.push(rest);
          });

          setProfileData((prev) => ({ ...prev, careers: newArray }));
          closeModal('careerModal');
        }}
      />
    </section>
  );
}
