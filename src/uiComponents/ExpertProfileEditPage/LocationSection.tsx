import MediumTitle from '@/components/Title/MediumTitle';
import { CiSquareRemove } from 'react-icons/ci';
import LocationModal from './LocationModal';
import { useModalStore } from '@/store/modalStore';
import { ExpertRegister } from '@/config/types';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import { useToastStore } from '@/store/toastStore';

type Props = {
  isExpert: boolean;
  profileData: ExpertRegister;
  setProfileData: React.Dispatch<React.SetStateAction<ExpertRegister>>;
};

export default function LocationSection({ isExpert, profileData, setProfileData }: Props) {
  const { openModal, closeModal } = useModalStore();
  const { addToasts } = useToastStore();

  const [select, setSelect] = useState<string | null>(null);
  const [selectDetailData, setSelectDetailData] = useState<string | null>(null);
  const [moreData, setMoreData] = useState<boolean>(false);

  const dataListFunction = () => {
    const locationArray = profileData.available_location;

    return locationArray && locationArray.length > 4 ? (
      <>
        {!moreData && <p>{`${locationArray[0]} 외 ${locationArray.length - 1}곳`}</p>}
        {moreData && locationArray.map((data, i) => <p key={i}>{data}</p>)}
        <button onClick={() => setMoreData((e) => !e)}>{moreData ? '(간략하게)' : '(더보기)'}</button>
      </>
    ) : (
      locationArray.map((data, i) => <p key={i}>{data}</p>)
    );
  };

  const addDataFuction = (location: string) => {
    if (profileData.available_location.find((data) => data === location)) {
      addToasts({ type: 'error', title: '이미 선택하신 지역입니다', id: Date.now().toString() });
    } else {
      setProfileData((prev) => ({
        ...prev,
        available_location: [...prev.available_location.sort(), location!],
      }));
      closeModal('locationModal');
    }
  };

  const confirmFunction = () => {
    if (confirm('데이터를 지우시겠습니까?') === true) {
      setProfileData((prev) => ({ ...prev, available_location: [] }));
      addToasts({ type: 'success', title: '데이터가 지워졌습니다.', id: Date.now().toString() });
    } else {
      addToasts({ type: 'error', title: '취소되었습니다.', id: Date.now().toString() });
    }
  };

  return (
    <section className='expertProfileEditSection'>
      <MediumTitle title='활동 지역' />

      <div className='location content'>
        <button
          onClick={() => {
            setSelect(null);
            setSelectDetailData('');
            openModal('locationModal');
          }}
          className='changeBtn'
        >
          {isExpert ? '수정' : '등록'}
        </button>

        {profileData.available_location?.length > 0 && (
          <button onClick={() => confirmFunction()} className='deleteBtn'>
            <CiSquareRemove size='2.5rem' />
          </button>
        )}

        <div>{dataListFunction()}</div>
      </div>

      <Modal
        modalId='locationModal'
        title='활동 지역'
        content={
          <LocationModal
            select={select}
            setSelect={setSelect}
            selectDetailData={selectDetailData}
            setSelectDetailData={setSelectDetailData}
          />
        }
        width='41.5rem'
        height='60vh'
        borderRadius='2rem'
        firstBtn={select ? true : false}
        firstBtnName='저장하기'
        firstBtnOnClick={() => {
          return select && !selectDetailData
            ? addDataFuction(select)
            : addDataFuction(`${select!} ${selectDetailData}`);
        }}
      />
    </section>
  );
}
