// import React, { useState } from 'react';
import NumberInput from '@/components/Input/NumberInput';
import { DataItem } from '@/uiComponents/ChatListPage/chat';
import { formatDate } from '@/utils/formatDate';

interface TransactionModalProps {
  amount: string | number; // 부모로부터 전달받은 상태
  setAmount: React.Dispatch<React.SetStateAction<string | number>>; // 상태 변경 함수
  chatData: DataItem | null;
}

const TransactionModal = ({ amount, setAmount, chatData }: TransactionModalProps) => {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value); // 부모 상태 업데이트
  };
  console.log(chatData);

  return (
    <div className='transactionModal'>
      <dl>
        <dt>금액</dt>
        <dd>
          <NumberInput placeholder='견적 금액을 입력하세요' value={amount} onChange={handleAmountChange} width='100%' />
        </dd>
      </dl>
      <dl>
        <dt>일정</dt>
        {chatData ? (
          <>
            <dd>{chatData.estimation.request.location_display}</dd>
            <dd>{formatDate(chatData.estimation.request.wedding_datetime)}</dd>
            {chatData.estimation.request.is_reception && <dd>2부</dd>}
          </>
        ) : (
          <dd>견적 정보가 없습니다.</dd>
        )}
      </dl>
    </div>
  );
};

export default TransactionModal;
