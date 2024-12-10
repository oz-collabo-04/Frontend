import { auth } from './axiosInstance';

// 예약내역 AT토큰으로 구분
// 유저
export const fetchReserveUserList = async () => {
  try {
    const response = await auth.get('/reservations/');
    console.log('user response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching user reservations: ', err);
  }
};

// 전문가
export const fetchReserveExpertList = async () => {
  try {
    const response = await auth.get('/experts/reservations/');
    console.log('expert response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching expert reservations: ', err);
  }
};

// 최종견적서확인 => id :estimation_id => 현재 전문가 입장에서만 확인됨
// reservation id는 예약과 관련되어있음
export const fetchFinalConfirmData = async (id: number) => {
  try {
    const response = await auth.get(`/reservations/${id}`);
    console.log('confirm response.status', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching Confirm Data: ', err);
  }
};

// 예약 상태 수정 API
export const fetchReservationStatus = async (id: number, status: string) => {
  try {
    const response = await auth.patch(`/reservations/${id}/`, { status }); // 객체 형태로 전달
    console.log('reservationStatus:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching Reservation Status Data: ', err);
    throw err; // 에러 상위로 던짐
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
