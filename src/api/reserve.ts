// import { auth } from './axiosInstance';

// // 유저 / 전문가 구분도 필요함 => AT토큰으로
// // 각 유저에 대한 예약내역을 가져올수 있어야함
// export const fetchReserveList = async () => {
//   try {
//     const response = await auth.get('/reservations/');
//     console.log('response.status:', response.status);
//     return response.data;
//   } catch (err) {
//     console.error('Error Fetching reservations:', err);
//   }
// };

// morks
import { workerStartPromise } from '@/mocks/browsers';
import axios from 'axios';

export const fetchReserveList = async () => {
  await workerStartPromise;
  try {
    const response = await axios.get('/mock/reservations');
    console.log('response.status:', response.status);
    return response.data;
  } catch (err) {
    console.error('Error Fetching reservations:', err);
  }
};
