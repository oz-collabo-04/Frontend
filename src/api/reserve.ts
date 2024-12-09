import { auth } from './axiosInstance';

// 예약내역 AT토큰으로 구분
// 유저
export const fetchReserveUserList = async () => {
  try {
    const response = await auth.get('/reservations/');
    console.log('user response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching user reservations:', err);
  }
};

// 전문가
export const fetchReserveExpertList = async () => {
  try {
    const response = await auth.get('/experts/reservations/');
    console.log('expert response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching expert reservations:', err);
  }
};

//? 작동유무 확인 필요
export const fetchConfirmData = async (id: number) => {
  try {
    const response = await auth.get(`/reservations/${id}`);
    console.log('confirm response.status', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching Confirm Data:', err);
  }
};

export const fetchCalenderList = async ({ month, year }: { month: number; year: number }) => {
  try {
    const response = await auth.get(`/experts/reservations/schedule/?month=${month}&year=${year}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
