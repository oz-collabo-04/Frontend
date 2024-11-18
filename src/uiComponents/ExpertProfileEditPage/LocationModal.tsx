import '@/styles/ExpertProfileEditPage/location.scss';
import { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

export default function LocationModal() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isDetailOpen2, setIsDetailOpen2] = useState(false);

  return (
    <div className='locationModal'>
      <div className='custom-select'>
        <div
          onClick={() => {
            setIsOpen1((e) => !e);
            setIsOpen2(false);
            setIsDetailOpen2(false);
          }}
          className='select'
        >
          <p>특별/광역시</p>
          <BiSolidDownArrow />
        </div>
        {isOpen1 && (
          <ul>
            {Array.from({ length: 7 }, (v, i) => (
              <li key={i} value={i}>
                {i + 1}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='custom-select'>
        <div
          onClick={() => {
            setIsOpen2((e) => !e);
            setIsOpen1(false);
          }}
          className='select'
        >
          <p>도</p>
          <BiSolidDownArrow />
        </div>
        {isOpen2 && (
          <ul>
            {Array.from({ length: 8 }, (v, i) => (
              <li onClick={() => setIsDetailOpen2(true)} key={i} value={i}>
                {i + 1}
              </li>
            ))}
          </ul>
        )}
      </div>

      {isDetailOpen2 && (
        <div className='detailLocation'>
          <p>강남구</p>
          <p>강남구</p>
          <p>강남구</p>
          <p>강남구</p>
          <p>강남구</p>
          <p>강남구</p>
          <p>강남구</p>
          <p>강남구</p>
          <p>강남구</p>
        </div>
      )}
    </div>
  );
}
