import MediumTitle from '@/components/Title/MediumTitle';
import { CiSquareRemove } from 'react-icons/ci';
import LocationModal from './LocationModal';
import { useModalStore } from '@/store/modalStore';
import { ExpertRegister } from '@/config/types';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import { useToastStore } from '@/store/toastStore';
import { useConfirmStore } from '@/store/confirmStore';
import Confirm from '@/components/Confirm/Confirm';

type Props = {
  isExpert: boolean | null;
  profileData: ExpertRegister;
  setProfileData: React.Dispatch<React.SetStateAction<ExpertRegister>>;
};

interface LocationDetail {
  [key: string]: { [key: string]: string }[];
}

export default function LocationSection({ isExpert, profileData, setProfileData }: Props) {
  const { openModal, closeModal } = useModalStore();
  const { openConfirm, closeConfirm } = useConfirmStore();
  const { addToasts } = useToastStore();

  const [select, setSelect] = useState<string | null>(null);
  const [selectDetailData, setSelectDetailData] = useState<string | null>(null);
  const [noSelect, setNoSelect] = useState<LocationDetail[] | []>([]);
  const [moreData, setMoreData] = useState<boolean>(false);

  const dataListFunction = () => {
    const locationArray = profileData.available_location_display ?? profileData.available_location;

    return locationArray && locationArray.length > 4 ? (
      <>
        {!moreData && <p>{`${locationArray[0]} 외 ${locationArray.length - 1}곳`}</p>}
        {moreData &&
          locationArray.map((data, i) => (
            <p key={i}>
              {data}
              {i < locationArray.length - 1 && ','}
            </p>
          ))}
        <button onClick={() => setMoreData((e) => !e)}>{moreData ? '(간략하게)' : '(더보기)'}</button>
      </>
    ) : (
      locationArray.map((data, i) => (
        <p key={i}>
          {data}
          {i < locationArray.length - 1 && ','}
        </p>
      ))
    );
  };

  const addDataFuction = (location: string) => {
    if (profileData.available_location_display!.length > 4) {
      addToasts({ type: 'error', title: '활동 지역은 최대 5개까지 입니다.', id: Date.now().toString() });
      return;
    }

    let noSelectCheck: boolean = false;

    noSelectCheck = [...noSelect].some((data) =>
      Object.entries(data).find(([key]) => key === select && !selectDetailData)
    );

    if (profileData.available_location_display!.find((data) => data === location)) {
      addToasts({ type: 'error', title: '이미 선택하신 지역입니다', id: Date.now().toString() });
    } else if (noSelectCheck) {
      addToasts({ type: 'error', title: '상세지역까지 선택해주세요', id: Date.now().toString() });
    } else {
      setProfileData((prev) => ({
        ...prev,
        available_location_display: [...prev.available_location_display!, location!],
      }));
      closeModal('locationModal');
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

        {profileData.available_location_display!.length > 0 && (
          <button onClick={() => openConfirm('locationDataClear')} className='deleteBtn'>
            <CiSquareRemove size='2.5rem' />
          </button>
        )}

        <div>{dataListFunction()}</div>
      </div>

      <Confirm
        confirmId='locationDataClear'
        title='데이터를 지우시겠습니까?'
        content='확인을 누르시면 활동 지역이 초기화 됩니다.'
        width='35em'
        height='17vh'
        borderRadius='2rem'
        trueBtn={true}
        trueBtnName='확인'
        trueBtnOnClick={() => {
          setProfileData((prev) => ({ ...prev, available_location_display: [] }));
          addToasts({ type: 'success', title: '데이터가 지워졌습니다.', id: Date.now().toString() });
          closeConfirm('locationDataClear');
        }}
        falseBtn={true}
        falseBtnName='취소'
        falseBtnOnClick={() => {
          addToasts({ type: 'error', title: '취소되었습니다.', id: Date.now().toString() });
          closeConfirm('locationDataClear');
        }}
      />

      <Modal
        modalId='locationModal'
        title='활동 지역'
        content={
          <LocationModal
            select={select}
            setSelect={setSelect}
            selectDetailData={selectDetailData}
            setSelectDetailData={setSelectDetailData}
            setNoSelect={setNoSelect}
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
