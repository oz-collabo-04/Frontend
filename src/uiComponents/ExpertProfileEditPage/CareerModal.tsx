import Input from '@/components/Input/Input';
import { Career } from '@/config/types';
import { useToastStore } from '@/store/toastStore';
import '@/styles/ExpertProfileEditPage/career.scss';
import { useState } from 'react';

type Props = {
  careerArray: Career[];
  setCareerArray: React.Dispatch<React.SetStateAction<Career[]>>;
};

export default function CareerModal({ careerArray, setCareerArray }: Props) {
  const { addToasts } = useToastStore();
  const [career, setCareer] = useState<Career>({
    id: Date.now().toString(),
    title: '',
    description: '',
    start_date: '',
    end_date: null,
  });
  const todayDate = new Date();
  const [detailList, setDetailList] = useState<boolean>(false);

  const disabledButton = () => {
    if (detailList) {
      return false;
    }

    if (career && careerArray.length >= 5) {
      return true;
    }

    if (!career.title || !career.description || !career.start_date) {
      return true;
    }
  };

  const addCareerList = () => {
    const updateArray = careerArray.filter((array) => array.id !== career.id!);
    updateArray.push(career);

    if (
      career.start_date &&
      career.end_date &&
      new Date(career.start_date).getTime() > new Date(career.end_date!).getTime()
    ) {
      return addToasts({ type: 'error', title: '종료일이 시작일보다 빠릅니다!!', id: Date.now().toString() });
    }

    if (updateArray) {
      setCareerArray(updateArray);
    } else {
      setCareerArray((prev) => [...prev, career]);
    }

    setCareer({
      id: Date.now().toString(),
      title: '',
      description: '',
      start_date: '',
      end_date: null,
    });

    setDetailList(false);
  };

  const showCareerList = () => {
    return (
      careerArray &&
      careerArray
        .sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime())
        .map((data, i) => (
          <li
            onClick={() => {
              setCareer(data);
              setDetailList(true);
            }}
            key={i}
          >
            {`${data.title} ${data.start_date} ~ ${data.end_date ?? ''}`}
            {!detailList && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCareerArray((prev) => prev.filter((e) => data.id !== e.id));
                }}
              >
                X
              </button>
            )}
          </li>
        ))
    );
  };

  return (
    <div className='careerModal'>
      <div className='careerInput'>
        <div>업무명, 기간을 입력하세요</div>

        <label>
          <p>경력</p>
          <Input
            maxLength={20}
            value={career.title}
            onChange={(e) => {
              if (e.target.value.length > 20) {
                return;
              }
              setCareer((prev) => ({ ...prev, title: e.target.value }));
            }}
            type='text'
            placeholder='ex) 결혼식 사회자'
            width='85%'
          />
          {career.title.length > 0 && <span>{career.title.length} / 20</span>}
        </label>

        <label>
          <p>세부사항</p>
          <textarea
            maxLength={100}
            className='comTextarea'
            placeholder='ex) 100만 규모 결혼식 사회 진행'
            value={career.description}
            onChange={(e) => {
              if (e.target.value.length > 100) {
                return;
              }
              setCareer((prev) => ({ ...prev, description: e.target.value }));
            }}
          />
          {career.description.length > 0 && <span>{career.description.length} / 100</span>}
        </label>

        <label>
          <p>시작일</p>
          <input
            value={career.start_date}
            onChange={(e) => {
              setCareer((prev) => ({ ...prev, start_date: e.target.value }));
            }}
            min='1970-01-01'
            max={todayDate.toISOString().slice(0, 10)}
            type='date'
          />
        </label>

        <label>
          <p>종료일</p>
          <input
            value={career.end_date || ''}
            onChange={(e) => {
              setCareer((prev) => ({ ...prev, end_date: e.target.value }));
            }}
            min='1970-01-01'
            max={todayDate.toISOString().slice(0, 10)}
            type='date'
          />
        </label>

        <button onClick={addCareerList} disabled={disabledButton()} className={disabledButton() ? 'disabledText' : ''}>
          {detailList ? '수정하기' : '추가하기'}
        </button>
      </div>

      <ul className='careerUpdate'>{showCareerList()}</ul>
    </div>
  );
}
