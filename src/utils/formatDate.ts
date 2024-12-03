// 날짜 포맷팅 함수
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${year}년 ${month}월 ${day < 10 ? `0${day}` : day}일 ${hours < 10 ? `0${hours}` : hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분`;
};
