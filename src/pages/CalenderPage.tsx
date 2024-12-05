import { fetchCalenderList } from '@/api/reserve';
import Modal from '@/components/Modal/Modal';
import PageTitle from '@/components/PageTitle/PageTitle';
import { Calender } from '@/config/types';
import { useModalStore } from '@/store/modalStore';
import '@/styles/CalenderPage/main.scss';
import DetailCalender from '@/uiComponents/CalenderPage/DetailCalender';
import { useEffect, useState } from 'react';
import { RxReset } from 'react-icons/rx';

export default function CalenderPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);

  const firstDayOfMonth = new Date(year, month - 1, 1);
  const startDay = new Date(firstDayOfMonth);
  startDay.setDate(1 - firstDayOfMonth.getDay());

  const lastDayOfMonth = new Date(year, month, 0);
  const endDay = new Date(lastDayOfMonth);
  endDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { openModal } = useModalStore();
  const [clickDate, setClickDate] = useState<string>('');
  const [calenderData, setCalenderData] = useState<Calender[] | []>({
    name: '',
    phone_number: '',
    service_display: '',
    location_display: '',
    wedding_hall: '',
    wedding_datetime: '',
    status_display: '',
  });

  const groupDatesByWeek = (startDay: Date, endDay: Date) => {
    const weeks = [];
    let currentWeek = [];
    const currentDate = new Date(startDay);

    while (currentDate <= endDay) {
      currentWeek.push(new Date(currentDate));

      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const weekArray = groupDatesByWeek(startDay, endDay);

  const getData = async () => {
    try {
      const data = await fetchCalenderList({ month, year });

      const newArray: Calender[] = [];

      data.map((el) =>
        newArray.push({
          name: el.user.name,
          phone_number: el.user.phone_number,
          service_display: el.service_display,
          location_display: el.location_display,
          wedding_hall: el.wedding_hall,
          wedding_datetime: el.wedding_datetime,
          status_display: el.status_display,
        })
      );

      setCalenderData(newArray);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [month, year]);

  const listCount = (week: number) => {
    let detailLength = 0;

    [...calenderData].map((data) => {
      if (new Date(data.wedding_datetime).getDate() === week) {
        detailLength = detailLength + 1;
      }
    });

    if (detailLength > 3) {
      return <div className='checkCount'>{detailLength}</div>;
    }
  };

  return (
    <div className='calenderPage contentLayout'>
      <PageTitle title='일정보기' isPrevBtn={true} prevUrl='/mypage' />

      <main className='calenderMain'>
        <div className='mainHeader'>
          <p>
            <button
              onClick={() => {
                if (1 < month) {
                  setMonth((prev) => prev - 1);
                  setIsLoading(true);
                } else if (month === 1) {
                  setYear((prev) => prev - 1);
                  setMonth((prev) => prev + 11);
                  setIsLoading(true);
                }
              }}
              type='button'
            >{`<`}</button>
            {year}년 {month}월
            <button
              onClick={() => {
                if (12 > month) {
                  setMonth((prev) => prev + 1);
                  setIsLoading(true);
                } else if (month === 12) {
                  setYear((prev) => prev + 1);
                  setMonth((prev) => prev - 11);
                  setIsLoading(true);
                }
              }}
              type='button'
            >{`>`}</button>
          </p>

          <button
            onMouseMove={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => {
              setCurrentDate(new Date());
              setYear(currentDate.getFullYear());
              setMonth(currentDate.getMonth() + 1);
              setIsHover(false);
            }}
            className='resetBtn'
            type='button'
          >
            {<RxReset size={'3rem'} />}
          </button>
          {isHover && <span className='hiddenText'>( 클릭 시 오늘 날짜로 이동합니다... )</span>}
        </div>

        <section className='contentSection'>
          <div className='contentHeader'>
            {weeks.map((week, i) => (
              <p key={i}>{week}</p>
            ))}
          </div>

          <div className='contentList'>
            {weekArray.map((weeks, i) => (
              <ul key={i}>
                {weeks.map((week, i) => (
                  <li key={i}>
                    {week < firstDayOfMonth || lastDayOfMonth < week ? (
                      <p className='disabledWeek'>{week.getDate()}</p>
                    ) : (
                      <>
                        <p>{week.getDate()}</p>
                        {!isLoading && calenderData.length > 0 && listCount(week.getDate())}
                        {isLoading ? (
                          <div className='detailList'></div>
                        ) : (
                          <div
                            onClick={() => {
                              setClickDate(week.getDate().toString());

                              [...calenderData].map((data) => {
                                if (new Date(data.wedding_datetime).getDate() === week.getDate()) {
                                  openModal('calenderModal');
                                }
                              });
                            }}
                            className={`detailList
                              ${
                                currentDate.getFullYear() === year &&
                                currentDate.getMonth() + 1 === month &&
                                currentDate.getDate() === week.getDate() &&
                                'todayList'
                              }`}
                          >
                            {!isLoading &&
                              calenderData.length > 0 &&
                              [...calenderData].map((data, i) => {
                                if (new Date(data.wedding_datetime).getDate() === week.getDate()) {
                                  return (
                                    <div
                                      className={`${data.status_display === 'completed' && 'completed'}`}
                                      key={i}
                                    >{`${data.service_display} / ${data.name} / ${new Date(data.wedding_datetime).toTimeString().slice(0, 5)}`}</div>
                                  );
                                }
                              })}
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>
      </main>
      <Modal
        modalId='calenderModal'
        title={`${year} / ${month} / ${clickDate} 일정 상세`}
        content={<DetailCalender calenderData={calenderData} clickDate={clickDate} />}
        width='48rem'
        height='50vh'
        borderRadius='2rem'
      />
    </div>
  );
}
