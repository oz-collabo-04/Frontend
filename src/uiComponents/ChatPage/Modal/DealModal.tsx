import React, { useState } from 'react';
import NumberInput from '@/components/Input/NumberInput';

const DealModal = () => {
  const [amount, setAmount] = useState<string | number>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value); // 부모 상태 업데이트
  };

  return (
    <div className='dealModal'>
      <dl>
        <dt>금액</dt>
        <dd>
          <NumberInput placeholder='견적 금액을 입력하세요' value={amount} onChange={handleAmountChange} width='100%' />
        </dd>
      </dl>
      <dl>
        <dt>일정</dt>
        <dd>서울시 강남구</dd>
        <dd>2024/11/14 11:00</dd>
        <dd>2부</dd>
      </dl>
    </div>
  );
};

export default DealModal;
