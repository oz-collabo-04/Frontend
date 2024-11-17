import React from 'react';

interface NumberInputProps {
  width?: string;
  height?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ width, height, placeholder, disabled, value = '', onChange }: NumberInputProps) => {
  // 숫자를 천 단위 콤마로 포맷하는 함수
  const formatNumber = (num: string | number) => {
    const numericValue = String(num).replace(/\D/g, ''); // 숫자 이외의 문자는 제거
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 천 단위 콤마 추가
  };

  // 입력 값 처리 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/,/g, ''); // 콤마를 제거하여 숫자만 남기기
    if (onChange) {
      onChange({
        ...e,
        target: { ...e.target, value: inputValue }, // 콤마 없이 값 전달
      });
    }
  };

  return (
    <input
      type='text' // 내부적으로는 text로 설정하여 천 단위 콤마를 처리
      className='comInput'
      placeholder={placeholder}
      style={{ width, height }}
      value={formatNumber(value)} // 천 단위 콤마 적용
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

export default NumberInput;
