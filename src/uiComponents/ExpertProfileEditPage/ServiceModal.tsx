import Checkbox from '@/components/Checkbox/Checkbox';
import '@/styles/ExpertProfileEditPage/service.scss';
import { useState } from 'react';

export default function ServiceModal() {
  const [isChecked, setIsChecked] = useState({
    service1: false,
    service2: false,
    service3: false,
    service4: false,
  });

  return (
    <div className='serviceModal'>
      <div>
        <Checkbox
          idFor='service1'
          content='결혼식 사회자'
          checked={isChecked.service1}
          onChange={() => setIsChecked((prev) => ({ ...prev, service1: !prev.service1 }))}
          disabled={isChecked.service2 || isChecked.service3 || isChecked.service4 ? true : false}
        />
      </div>
      <div>
        <Checkbox
          idFor='service2'
          content='축가 가수'
          checked={isChecked.service2}
          onChange={() => setIsChecked((prev) => ({ ...prev, service2: !prev.service2 }))}
          disabled={isChecked.service1 || isChecked.service3 || isChecked.service4 ? true : false}
        />
      </div>
      <div>
        <Checkbox
          idFor='service3'
          content='영상 촬영'
          checked={isChecked.service3}
          onChange={() => setIsChecked((prev) => ({ ...prev, service3: !prev.service3 }))}
          disabled={isChecked.service1 || isChecked.service2 || isChecked.service4 ? true : false}
        />
      </div>
      <div>
        <Checkbox
          idFor='service4'
          content='스냅 촬영'
          checked={isChecked.service4}
          onChange={() => setIsChecked((prev) => ({ ...prev, service4: !prev.service4 }))}
          disabled={isChecked.service1 || isChecked.service2 || isChecked.service3 ? true : false}
        />
      </div>
    </div>
  );
}
