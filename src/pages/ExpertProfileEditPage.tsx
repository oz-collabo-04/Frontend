import '@/styles/ExpertProfileEditPage/main.scss';
import { LuPlusCircle } from 'react-icons/lu';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import MediumTitle from '@/components/Title/MediumTitle';
import MainBtn from '@/components/Button/MainBtn';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import LocationModal from '@/uiComponents/ExpertProfileEditPage/LocationModal';
import ServiceModal from '@/uiComponents/ExpertProfileEditPage/ServiceModal';
import CareerModal from '@/uiComponents/ExpertProfileEditPage/CareerModal';
import PageTitle from '@/components/PageTitle/PageTitle';

export default function ExpertProfileEditPage() {
  const [isExpert, setIsExpert] = useState(false); // 임시코드. 일단 전문가 아이디 확정되면 전문가아이디에 따라 boolean
  const { openModal } = useModalStore();

  return (
    <>
      <div className='expertProfileEditPage contentLayout'>
        <PageTitle title={isExpert ? '프로필 관리' : '프로필 등록'} isPrevBtn={true} prevUrl='/' />

        <main className='expertProfileEditMain'>
          <section className='expertProfileEditSection'>
            <MediumTitle title='프로필 설정' />
            <div className='profile content'>
              <p>프로필 이미지 ( 0 / 1 )</p>
              <div>
                <button>
                  <LuPlusCircle size='2rem' />
                </button>
                {isExpert && <img src='#' alt='이미지있으면보임' />}
              </div>

              <p>프로필 설명</p>
              <Input type='text' placeholder='설명글' width='50rem' />
              <button className='doneBtn'>완료</button>
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

          <section className='expertProfileEditSection'>
            <MediumTitle title='제공 서비스' />
            <div className='service content'>
              <button onClick={() => openModal('serviceModal')} className='changeBtn'>
                {isExpert ? '수정' : '등록'}
              </button>
              <p>결혼식 사회자</p>
            </div>
            <Modal
              modalId='serviceModal'
              title='제공 서비스'
              content={<ServiceModal />}
              height='50vh'
              borderRadius='2rem'
              firstBtn={true}
              firstBtnName='저장하기'
              firstBtnOnClick={() => console.log('제공 서비스 모달 버튼')}
            />
          </section>

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

          <MainBtn name={isExpert ? '저장하기' : '등록하기'} extraClass='submitBtn' />
        </main>
      </div>
    </>
  );
}
