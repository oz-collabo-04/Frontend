// 시간 포맷팅 함수
export const chatFormatDate = (dateString: string) => {
  const date = new Date(dateString);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours >= 12 ? '오후' : '오전'; // 오전/오후 구분
  if (hours > 12) hours -= 12; // 12시간제로 변환
  if (hours === 0) hours = 12; // 자정 12시 처리

  return `${period} ${hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분`;
};
