// 데이터상태 한글변경
export const getStatusKorean = (status: string) => {
  switch (status) {
    case 'confirmed':
      return '예약 확정';
    case 'completed':
      return '서비스 완료';
    case 'canceled':
      return '예약 취소';
    default:
      return '기본';
  }
};
