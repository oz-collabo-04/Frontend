import { Calender } from '@/config/types';
import '@/styles/CalenderPage/detailCalender.scss';

type Props = {
  calenderData: [] | Calender[];
  clickDate: string;
};

export default function DetailCalender({ calenderData, clickDate }: Props) {
  return (
    <ul className='calenderModal'>
      {[...calenderData].map((data, i) => {
        if (new Date(data.wedding_datetime).getDate().toString() === clickDate) {
          return (
            <li className='calenderContent' key={i}>
              <div className='userContent'>
                <p>{data.service_display}</p>
                <p>{data.name}</p>
                <p>{data.phone_number}</p>
                <p>{data.status_display}</p>
              </div>
              <div className='weddingContent'>
                <p>{data.location_display}</p>
                <p>{data.wedding_hall}</p>
                <p>{new Date(data.wedding_datetime).toTimeString().slice(0, 5)}</p>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}
