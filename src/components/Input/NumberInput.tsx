import React from 'react';
import { useToastStore } from '@/store/toastStore';
import { Toast } from '@/config/types';

interface NumberInputProps {
  width?: string;
  height?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MAX_AMOUNT = 100000000; // 최대 입력 가능 금액

const NumberInput = ({ width, height, placeholder, disabled = false, value = '', onChange }: NumberInputProps) => {
  const addToasts = useToastStore((state) => state.addToasts);

  // 숫자를 천 단위 콤마로 포맷하는 함수
  const formatNumber = (num: string | number) => {
    const numericValue = String(num).replace(/\D/g, '');
    if (!numericValue || numericValue === '0') return numericValue;
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 입력 값 처리 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/,/g, '');

    // "0"이 두 개 이상 들어오지 않도록 처리
    if (/^0\d+/.test(inputValue)) {
      inputValue = inputValue.replace(/^0+/, '');
    }

    // 최대 금액 체크
    if (Number(inputValue) > MAX_AMOUNT) {
      const newToast: Toast = {
        id: `toast_${Date.now()}`,
        type: 'error',
        title: '이 이상의 금액을 입력하실 수 없습니다.'
      };
      addToasts(newToast);
      inputValue = String(MAX_AMOUNT);
    }

    if (onChange) {
      onChange({
        ...e,
        target: { ...e.target, value: inputValue },
      });
    }
  };

  return (
    <span className='inpNum'>
      <input
        type='text'
        className='comInput'
        placeholder={placeholder}
        style={{ width, height }}
        value={formatNumber(value)}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className='unit'>원</span>
    </span>
  );
};

export default NumberInput;