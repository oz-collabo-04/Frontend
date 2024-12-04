import { fetchCalenderList } from '@/api/estimations';
import PageTitle from '@/components/PageTitle/PageTitle';
import '@/styles/CalenderPage/main.scss';
import { useEffect, useState } from 'react';

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
    const data = await fetchCalenderList({ month, year });
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, [month, year]);

  return (
    <div className='calenderPage contentLayout'>
      <PageTitle title='일정보기' isPrevBtn={true} prevUrl='/' />

      <main className='calenderMain'>
        <div className='mainHeader'>
          <p>
            <button
              onClick={() => {
                if (1 < month) {
                  setMonth((prev) => prev - 1);
                } else if (month === 1) {
                  setYear((prev) => prev - 1);
                  setMonth((prev) => prev + 11);
                }
              }}
              type='button'
            >{`<`}</button>
            {year}년 {month}월
            <button
              onClick={() => {
                if (12 > month) {
                  setMonth((prev) => prev + 1);
                } else if (month === 12) {
                  setYear((prev) => prev + 1);
                  setMonth((prev) => prev - 11);
                }
              }}
              type='button'
            >{`>`}</button>
          </p>
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
                {weeks.map((week, index) => (
                  <li key={index}>
                    {week < firstDayOfMonth || lastDayOfMonth < week ? (
                      <p className='disabledWeek'>{week.getDate()}</p>
                    ) : (
                      <p>{week.getDate()}</p>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
