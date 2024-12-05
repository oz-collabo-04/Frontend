import { auth } from './axiosInstance';

// 유저 / 전문가 구분?
// 각 유저에 대한 예약내역 AT토큰으로 구분
export const fetchReserveList = async () => {
  try {
    const response = await auth.get('/reservations/');
    console.log('response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching reservations:', err);
  }
};

export const fetchCalenderList = async ({ month, year }: { month: number; year: number }) => {
  try {
    const response = await auth.get(`/reservations/schedule/?month=${month}&year=${year}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
